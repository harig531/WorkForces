import { Component, Input, OnInit } from '@angular/core';
import { EmployeeModel,EmployeeModelList} from '../../models/Employee';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from '../../shared/employee-service.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, CutomsDialogComponent } from '../../shared/cutoms-dialog/cutoms-dialog.component';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

 employeeobj?:EmployeeModel= new EmployeeModel();

 last_name?:string;
 image= 'assets/img/noimage.png';
 result: boolean=false;
  constructor(public dialog: MatDialog,public _domsant: DomSanitizer,public service : EmployeeServiceService,private toastr: ToastrService,private router: Router) {

    service.formdata = new EmployeeModel()
   }
  ngOnInit(): void {

  }


  onSubmit() {
    var body = {
      id : this.service.empjsondata[0].data?.length!+1,
      avatar:  this.image,
      first_name :this.service.formdata.first_name,
      last_name :this.service.formdata.last_name,
      email :this.service.formdata.email
    }
    this.service.empjsondata[0].data?.push(body);
    this.router.navigate(["employeelist"]);
    this.dialog.closeAll();
    this.toastr.success('Record Created successfully');
}
fileToUpload: any;
fileChange(e:any) {
  this.fileToUpload = e.srcElement.files[0];
  // this.image = window.URL.createObjectURL(file);
  let reader = new FileReader();
  reader.onload = (event: any) => {
    this.image = event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload);

}


opencancelDialog(): void {
  const message = `Are you sure you want to discard the changes?`;
  const dialogData = new ConfirmDialogModel("Confirm Action", message);
  const dialogRef = this.dialog.open(CutomsDialogComponent, {
    maxWidth: "400px",
    data: dialogData
  });
  dialogRef.afterClosed().subscribe(dialogResult => {
    this.result = dialogResult;
    if(this.result)
    {
      this.service.IsButtonShow=false;
      this.dialog.closeAll();
    }
  });
}


}
