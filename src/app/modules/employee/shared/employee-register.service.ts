import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EmployeeRegisterService {

  // constructor(private fbgroup: FormBuilder, private http: HttpClient) { }
  // readonly baseURI='assets/empjson/empjson.js'
  // formModel = this.fbgroup.group({
  //   first_name: ['', Validators.required],
  //   last_name: ['', Validators.required],
  //   email: ['',Validators.email,Validators.required],
  //   avatar:['']
  // });

  // register() {
  //   var body = {
  //     UserName: this.formModel.value.UserName,
  //     Email: this.formModel.value.Email,
  //     FullName: this.formModel.value.FullName,
  //     Password: this.formModel.value.Passwords.Password,
  //     avatar: this.formModel.value.Passwords.avatar
  //   };
  //   return this.http.post(this.baseURI, body);
  // }
}
