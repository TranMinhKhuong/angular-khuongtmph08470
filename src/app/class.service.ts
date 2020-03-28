import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
const apiUrl = "https://5e7ca4f2a917d7001668392a.mockapi.io/schools";
@Injectable()
export class ClassService {
  constructor(private http: HttpClient) {}
  getClassByClassId(schoolId, classId): Observable<any> {
    let api = `${apiUrl}/${schoolId}/classes/${classId}`;
    return this.http.get<any>(api);
  }
  getClassesBySchoolId(schoolId): Observable<any> {
    let api = `${apiUrl}/${schoolId}/classes`;
    return this.http.get<any>(api);
  }
  getDetailClass(schoolId, classId): Observable<any> {
    let api = `${apiUrl}/${schoolId}/classes/${classId}`;
    return this.http.get<any>(api);
  }
  removeClass(schoolId, classId): Observable<any> {
    let url = `${apiUrl}/${schoolId}/classes/${classId}`;
    return this.http.delete<any>(url);
  }
  addClass(ClassObject): Observable<any> {
    let url = `${apiUrl}/${ClassObject.schoolId}/classes`;
    return this.http.post<any>(url, ClassObject);
  }
  updateClass(classObject): Observable<any> {
    let api = `${apiUrl}/${classObject.schoolId}/classes/${classObject.id}`;
    return this.http.put<any>(api, classObject);
  }
}
