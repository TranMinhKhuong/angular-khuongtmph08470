import { Component, OnInit } from "@angular/core";
import { SchoolService } from "../school.service";
@Component({
  selector: "app-schools-list",
  templateUrl: "./schools-list.component.html",
  styleUrls: ["./schools-list.component.css"]
})
export class SchoolsListComponent implements OnInit {
  constructor(private schoolService: SchoolService) {}

  schools = [];
  ngOnInit() {
    this.schoolService.getSchools().subscribe(data => {
      console.log(data);
      this.schools = data;
    });
  }
}
