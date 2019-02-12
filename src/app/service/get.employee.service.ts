import { Injectable } from '@angular/core';
import { Employee } from 'src/model/employee.model';
import { ServiceResponse } from 'src/model/employee.model';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Configuration } from '../../app.constants';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetEmployeeService {
  employeeList: Employee[];
  allEmpDetails: string = 'http://localhost:3000/api/employees';
  getEmpById: string = 'http://localhost:3000/api/employees/eid/';  //add the emp id to teh end


  constructor(private http: HttpClient) { }

  // This format won't work as the response type is not defeined. 
  // GetEmployeeService() {
  //   return this.http.get(this.itemUrl)
  // }

  GetEmpData(): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(this.allEmpDetails)
  }


  GetEmpDataByID(eid: number): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(this.getEmpById + eid)
  }

  // This format works. Here the response is given as an inline object. above one uses model
  // GetEmployeeService(): Observable<{ message: string, emp: employee[] }> {
  //   return this.http.get<{ message: string, emp: employee[] }>(this.itemUrl)
  // }
}
