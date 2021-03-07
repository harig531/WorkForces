import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeModel,EmployeeModelList,IEmployeeModel,IEmployeeModelList} from '../../models/Employee'
import { EmployeeServiceService } from '../../shared/employee-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

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


  constructor(public dialog: MatDialog,public dom: DomSanitizer,public employeeService:EmployeeServiceService, private router: Router,private toastr: ToastrService,private spinner: NgxSpinnerService) {

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


  openDialog(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
    this.employeeService.IsButtonShow=true;
    const dialogRef = this.dialog.open(EmployeeFormComponent,{
      width: '940px',disableClose: false
    });
}

  adduser(): void {
    this.employeeService.IsButtonShow=true;
    const dialogRef = this.dialog.open(EmployeeFormComponent,{
      width: '440px',disableClose: false
    });
  }

}


