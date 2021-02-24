import { Injectable } from '@angular/core';
// import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { HttpClient } from "@angular/common/http";
import { EmployeeModel,EmployeeModelList } from '../models/Employee'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  constructor(private _http :HttpClient ){}
  allEmployees:EmployeeModel[] = [
    {
      "id": 1,
      "first_name": "Lalit",
      "last_name": "Aggarwal",
      "email": "harig531@gmail.com",
      "avatar": "assets/img/noimage.png"
    },
    {
      "id": 2,
      "first_name": "Lalit",
      "last_name": "Aggarwal",
      "email": "harig531@gmail.com",
      "avatar": "assets/img/noimage.png"
    },
    {
      "id": 2,
      "first_name": "Lalit",
      "last_name": "Aggarwal",
      "email": "harig531@gmail.com",
      "avatar": "assets/img/noimage.png"
    }
  ];

  listAllEmployees():EmployeeModel[]{
    return this.allEmployees;
  }

  addEmployee(employee:EmployeeModel){
    this.allEmployees.push(employee);
  }


    deleteEmployee(id:number){
      this.allEmployees = this.allEmployees.filter(employee => employee.id != id);
    }



    getEmployees(): Observable<EmployeeModelList> {
      return this._http.get<EmployeeModelList>("https://reqres.in/api/users?page=1");
  }

}
