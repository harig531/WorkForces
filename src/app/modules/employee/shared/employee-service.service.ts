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
 formdata:EmployeeModel= new EmployeeModel();
 empjsondata:EmployeeModelList[]=[];
 IsButtonShow:boolean=false;
  constructor(private _http :HttpClient ){}

    getEmployees(): Observable<EmployeeModelList> {
      return this._http.get<EmployeeModelList>(this.baseURI);
  }


}
