import { Component, OnInit } from '@angular/core';
import { EmployeeModel  } from '../../models/Employee'
import { EmployeeServiceService } from '../../shared/employee-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  //_listFilterBy: string;
  allEmployees?: EmployeeModel[];
  filteredList?: EmployeeModel[];
  constructor(private employeeService:EmployeeServiceService, private router: Router) {


  }


  ngOnInit() {

    this.allEmployees = this.employeeService.listAllEmployees();
    this.filteredList = this.allEmployees;

  }


}
