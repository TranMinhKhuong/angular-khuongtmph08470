import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SchoolService } from "../school.service";
import { Observable } from "rxjs";
@Component({
  selector: "app-schools-detail",
  templateUrl: "./schools-detail.component.html",
  styleUrls: ["./schools-detail.component.css"]
})
export class SchoolsDetailComponent implements OnInit {
  schoolData = null;
  constructor(
    private schoolService: SchoolService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let schoolId = params.get("schoolId");
      this.schoolService.getSchoolById(schoolId).subscribe(data => {
        console.log(data);
        this.schoolData = data;
      });
    });
  }
  remove() {
    let conf = confirm("Bạn có chắc chắn xóa trường học này ?");
    if (conf) {
      this.schoolService
        .removeSchoolById(this.schoolData.id)
        .subscribe(data => {
          this.route.navigate([""]);
        });
    }
  }
}
