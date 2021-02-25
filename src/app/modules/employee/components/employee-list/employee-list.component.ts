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
  @Input('data') employeelist?: IEmployeeModelList;
  config: any;
   page: number = 1;
   itemperpage: number = 8;
  @Output() public duplicateemployeelist = new EventEmitter<EmployeeModelList>();

  constructor(private employeeService:EmployeeServiceService, private router: Router,private toastr: ToastrService) {

  }
  ngOnInit() {
      this.employeeService.getEmployees().
      subscribe((result: IEmployeeModelList) =>
      {
      this.employeelist=result,
      this.duplicateemployeelist.emit(result)
      }
      );
      this.toastr.success('Welcome to Workforce!', '');

  };

  }


