import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ClassService } from "../class.service";
import { Observable } from "rxjs";
@Component({
  selector: "app-classes-detail",
  templateUrl: "./classes-detail.component.html",
  styleUrls: ["./classes-detail.component.css"]
})
export class ClassesDetailComponent implements OnInit {
  classData = null;
  constructor(
    private classService: ClassService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let schoolId = params.get("schoolId");
      let classId = params.get("classId");
      this.classService.getDetailClass(schoolId, classId).subscribe(data => {
        console.log(data);
        this.classData = data;
      });
    });
  }
  removeClass() {
    let conf = confirm("Bạn có chắc chắn xóa lớp học này ?");
    if (conf) {
      this.classService.removeClass(this.classData.schoolId, this.classData.id)
        .subscribe(data => {
          let scid = this.classData.schoolId;
          this.route.navigate(["/detail", scid]);
        });
    }
  }
}
