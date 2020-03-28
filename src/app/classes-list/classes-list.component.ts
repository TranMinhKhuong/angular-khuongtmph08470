import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ClassService } from "../class.service";
@Component({
  selector: "app-classes-list",
  templateUrl: "./classes-list.component.html",
  styleUrls: ["./classes-list.component.css"]
})
export class ClassesListComponent implements OnInit {
  constructor(
    private classService: ClassService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}
  classesData = [];
  scId = null;
  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let schoolId = params.get("schoolId");
      this.scId = schoolId;
      this.classService.getClassesBySchoolId(schoolId).subscribe(data => {
        console.log(data);
        this.classesData = data;
      });
    });
  }
}
