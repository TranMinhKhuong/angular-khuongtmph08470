import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { SchoolsListComponent } from "./schools-list/schools-list.component";
import { SchoolsDetailComponent } from "./schools-detail/schools-detail.component";
import { SchoolsFormComponent } from "./schools-form/schools-form.component";
import { ClassesListComponent } from "./classes-list/classes-list.component";
import { ClassesDetailComponent } from "./classes-detail/classes-detail.component";
import { ClassesFormComponent } from "./classes-form/classes-form.component";
import { SchoolService } from "./school.service";
import { ClassService } from "./class.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: SchoolsListComponent },
      { path: "detail/:schoolId", component: SchoolsDetailComponent },
      {
        path: "detail/:schoolId/class-detail/:classId",
        component: ClassesDetailComponent
      },
      { path: "add-school", component: SchoolsFormComponent },
      { path: "edit-school/:schoolId", component: SchoolsFormComponent },
      { path: "add-class/:schoolId", component: ClassesFormComponent },
      { path: "edit-class/:classId/:schoolId", component: ClassesFormComponent }
    ])
  ],
  declarations: [
    AppComponent,
    SchoolsListComponent,
    SchoolsDetailComponent,
    SchoolsFormComponent,
    ClassesListComponent,
    ClassesDetailComponent,
    ClassesFormComponent
  ],
  bootstrap: [AppComponent],
  providers: [SchoolService, ClassService]
})
export class AppModule {}
