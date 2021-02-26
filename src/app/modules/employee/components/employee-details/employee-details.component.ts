import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeModel } from '../../models/Employee';
import { ConfirmDialogModel, CutomsDialogComponent } from '../../shared/cutoms-dialog/cutoms-dialog.component';
import { EmployeeRegisterService } from '../../shared/employee-register.service';
import { EmployeeServiceService } from '../../shared/employee-service.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  result: boolean=false;
  confirmDialog(emp:EmployeeModel): void {
    const message = `Are you sure you want to Delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(CutomsDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if(this.result)
      {
        this.service.empjsondata[0].data=this.service.empjsondata[0].data?.filter(({ id }) => id !== emp.id)
         this.router.navigate(["employeelist"]);
         this.toastr.error('Record deleted successfully');
      }
    });
  }
  constructor(public dialog: MatDialog,private toastr: ToastrService,public service : EmployeeServiceService,private router: Router) { }
  empdata:EmployeeModel= new EmployeeModel()
  ngOnInit(): void {
    this.empdata=this.service.formdata;
  }

  updateemployee(emp:EmployeeModel):void{
    this.router.navigate(["employeelist"]);
  }

}
