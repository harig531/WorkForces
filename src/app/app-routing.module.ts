import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './modules/employee/components/employee-details/employee-details.component';
import { EmployeeFormComponent } from './modules/employee/components/employee-form/employee-form.component';
import { EmployeeListComponent } from './modules/employee/components/employee-list/employee-list.component';


const  routes:Routes
 = [
    {path : 'employeelist',component:EmployeeListComponent},
    {path : 'employeedetails/:Id',component:EmployeeDetailsComponent},
    {path : 'employeeform',component:EmployeeFormComponent},
    {path : '',component:EmployeeListComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
