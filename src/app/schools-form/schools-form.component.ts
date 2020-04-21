import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { SchoolService } from "../school.service";
import {Validators } from '@angular/forms';
@Component({
  selector: "app-schools-form",
  templateUrl: "./schools-form.component.html",
  styleUrls: ["./schools-form.component.css"]
})
export class SchoolsFormComponent implements OnInit {
  schoolForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(25),
      Validators.maxLength(200)
    ]),
    logo: new FormControl(""),
    address: new FormControl(""),
    president: new FormControl(""),
    province: new FormControl("")
  });
  get name() { return this.schoolForm.get('name');}

  constructor(
    private SchoolService: SchoolService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let schoolId = params.get("schoolId");

      this.SchoolService.getSchoolById(schoolId).subscribe(data => {
        this.schoolForm.setValue(data);
      });
    });
  }
  save() {
    if(this.schoolForm.invalid){
      return false;
    }
    if (this.schoolForm.value.id == null) {
      //thêm mới
      this.SchoolService.addNewSchool(this.schoolForm.value).subscribe(data => {
        console.log(data);
        this.route.navigate([""]);
      });
    } else {
      //cập nhật
      this.SchoolService.updateSchool(this.schoolForm.value).subscribe(data => {
        console.log(data);
        let scId = this.schoolForm.value.id;
        this.route.navigate(["/detail", scId]);
      });
    }
  }
}
