import { Component, OnInit } from '@angular/core';
import { EmployeeModel,EmployeeModelList} from '../../models/Employee'
import { EmployeeServiceService } from '../../shared/employee-service.service';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  allEmployees?: EmployeeModel[];
  filteredList?: EmployeeModelList;
  employeelist?: EmployeeModelList[];
  allEmployeesduplicate?: EmployeeModelList;
  statusMessage:string='';

  arrya:[]=[];
  constructor(private employeeService:EmployeeServiceService, private router: Router) {


  }
  ngOnInit() {
    // this.allEmployees = this.employeeService.listAllEmployees();
    // this.filteredList = this.allEmployees;
      this.employeeService.getEmployees().
      subscribe((result: EmployeeModelList) => this.allEmployeesduplicate=result);
      console.log(this.allEmployeesduplicate);

  };

  }


