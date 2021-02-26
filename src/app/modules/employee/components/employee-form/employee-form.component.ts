import { Component, Input, OnInit } from '@angular/core';
import { EmployeeModel,EmployeeModelList} from '../../models/Employee';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from '../../shared/employee-service.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

 employeeobj?:EmployeeModel= new EmployeeModel();

 last_name?:string;
 image= 'assets/img/noimage.png';

  constructor(public _domsant: DomSanitizer,public service : EmployeeServiceService,private toastr: ToastrService,private router: Router) {

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





}
