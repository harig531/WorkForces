import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeModel,EmployeeModelList,IEmployeeModel,IEmployeeModelList} from '../../models/Employee'
import { EmployeeServiceService } from '../../shared/employee-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  filteredList?: IEmployeeModelList;
   employeelist?: IEmployeeModelList;
  config: any;
   page: number = 1;
   itemperpage: number = 8;


  constructor(public employeeService:EmployeeServiceService, private router: Router,private toastr: ToastrService) {

  }
  ngOnInit() {

    if(this.employeeService.empjsondata.length==0)
    {

      this.employeeService.getEmployees().
      subscribe((result: IEmployeeModelList) =>
      {
      this.employeeService.empjsondata.push(result);
      }
      )
    }

  };


  empdeils(emp:EmployeeModel)
  {
    this.employeeService.formdata=emp;
    this.router.navigate(["employeedetails"]);
  }
}


