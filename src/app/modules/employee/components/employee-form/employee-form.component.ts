import { Component, Input, OnInit } from '@angular/core';
import { EmployeeModel,EmployeeModelList} from '../../models/Employee';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from '../../shared/employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

 employeeobj?:EmployeeModel= new EmployeeModel();

 last_name?:string;


  constructor(public service : EmployeeServiceService,private toastr: ToastrService,private router: Router) { }
  ngOnInit(): void {

  }


  onSubmit() {
    var body = {
      id : this.service.empjsondata[0].data?.length!+1,
      avatar: 'assets/img/noimage.png',
      first_name :this.service.formdata.first_name,
      last_name :this.service.formdata.last_name,
      email :this.service.formdata.email
    }
    this.service.empjsondata[0].data?.push(body);
    this.router.navigate(["employeelist"]);
    this.toastr.success('Record Created successfully');
}


}
