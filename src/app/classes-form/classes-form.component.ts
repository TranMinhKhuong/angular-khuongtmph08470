import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ClassService } from "../class.service";
import { SchoolService } from "../school.service";
@Component({
  selector: "app-classes-form",
  templateUrl: "./classes-form.component.html",
  styleUrls: ["./classes-form.component.css"]
})
export class ClassesFormComponent implements OnInit {
  classForm: FormGroup;
  schoolData = [];
  scData = [];
  constructor(
    private classService: ClassService,
    private schoolService: SchoolService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let schoolId = params.get("schoolId");
      let classId = params.get("classId");
      this.classForm = new FormGroup({
        id: new FormControl(null),
        schoolId: new FormControl(schoolId),
        name: new FormControl(""),
        room_number: new FormControl(null),
        total_student: new FormControl(null),
        main_teacher: new FormControl("")
      });
      this.schoolService.getSchoolById(schoolId).subscribe(data => {
        console.log(data);
        this.schoolData = data;
      });
      this.schoolService.getSchools().subscribe(data => {
        this.scData = data;
      });
      if (classId == null) {
        this.classService.getClassesBySchoolId(schoolId).subscribe(data => {
          this.classForm.setValue(data);
        });
      } else {
        this.classService
          .getClassByClassId(schoolId, classId)
          .subscribe(data => {
            this.classForm.setValue(data);
          });
      }
    });
  }
  saveClass() {
    if (this.classForm.value.id == null) {
      //add
      this.classService.addClass(this.classForm.value).subscribe(data => {
        let scId = this.classForm.value.schoolId;
        this.router.navigate(["/detail", scId]);
      });
    } else {
      //update
      this.classService.updateClass(this.classForm.value).subscribe(data => {
        let scId = this.classForm.value.schoolId;
        let clId = this.classForm.value.id;
        this.router.navigate(["/detail", scId, "class-detail", clId]);
      });
    }
  }
}
