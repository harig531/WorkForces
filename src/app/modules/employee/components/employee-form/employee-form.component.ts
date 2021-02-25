import { Component, OnInit } from '@angular/core';
import { EmployeeModel,EmployeeModelList} from '../../models/Employee';
import { ToastrService } from 'ngx-toastr';
import { EmployeeRegisterService } from '../../shared/employee-register.service';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employeeobj?:EmployeeModel;


  constructor(public service : EmployeeRegisterService,private toastr: ToastrService) { }
  ngOnInit(): void {

  }

  onSubmit() {
    // this.service.register().subscribe(
    //   (res: any) => {
    //     if (res.succeeded) {
    //       this.service.formModel.reset();
    //       this.toastr.success('New user created!', 'Registration successful.');
    //     } else {
    //       res.errors.forEach((element: { code: any; description: any; }) => {
    //         switch (element.code) {
    //           case 'DuplicateUserName':
    //             this.toastr.error('Username is already taken','Registration is failed.');
    //             break;

    //           default:
    //           this.toastr.error(element.description,'Registration is failed.');
    //             break;
    //         }
    //       });
    //     }
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }

}
