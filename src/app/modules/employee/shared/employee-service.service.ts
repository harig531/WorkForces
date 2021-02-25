import { Injectable } from '@angular/core';
import { EmployeeModel,EmployeeModelList,IEmployeeModel,IEmployeeModelList } from '../models/Employee'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {


  // the below we can uncomment for testing the api services
 //readonly baseURI:string='https://reqres.in/api/users?page=1'
 readonly baseURI='assets/empjson/empjson.js'


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
      return this._http.get<EmployeeModelList>(this.baseURI);
  }




  getImployees(): Observable<IEmployeeModelList> {
    return this._http.get<IEmployeeModelList>(this.baseURI);
}​​​​​​​​


}
