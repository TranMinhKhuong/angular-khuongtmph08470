import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
const apiUrl = "https://5e79b50717314d0016133423.mockapi.io/schools";
@Injectable()
export class SchoolService {
  constructor(private http: HttpClient) {}
  getSchools(): Observable<any> {
    return this.http.get<any>(apiUrl);
  }
  getSchoolById(schoolId): Observable<any> {
    let url = `${apiUrl}/${schoolId}`;
    return this.http.get<any>(url);
  }
  removeSchoolById(schoolId): Observable<any> {
    let url = `${apiUrl}/${schoolId}`;
    return this.http.delete<any>(url);
  }
  addNewSchool(School):Observable<any>{
    return this.http.post<any>(apiUrl,School);
  }
  updateSchool(School):Observable<any>{
    let url =`${apiUrl}/${School.id}`
    return this.http.put<any>(url,School);
  }
}
