import { Injectable } from '@angular/core';
// import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { HttpClient } from "@angular/common/http";
import { EmployeeModel } from '../models/Employee'


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
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
    }
  ];

  listAllEmployees():EmployeeModel[]{
    return this.allEmployees;
  }

  addEmployee(employee:EmployeeModel){
    this.allEmployees.push(employee);
  }

    // // Update employee details
    // updateEmployee(employee:EmployeeModel){
    //   var updateEmployees = this.allEmployees.find(emp => emp.id == employee.id);
    //   updateEmployees.first_name = employee.first_name;
    //   updateEmployees.last_name = employee.last_name;
    //   updateEmployees.email = employee.email;
    //   updateEmployees.avatar = employee.avatar;
    // }


    deleteEmployee(id:number){
      this.allEmployees = this.allEmployees.filter(employee => employee.id != id);
    }

    // // Returns an employee with passed employee id from employee list
    // getEmployee(id:number):EmployeeModel{
    //   return this.allEmployees.find(emp => emp.id == id);
    // }

}
