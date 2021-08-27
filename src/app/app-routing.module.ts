import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './modules/employee/components/employee-details/employee-details.component';
import { EmployeeFormComponent } from './modules/employee/components/employee-form/employee-form.component';
import { EmployeeListComponent } from './modules/employee/components/employee-list/employee-list.component';
import { NgrxexmpComponent } from './ngrx/ngrxexmp/ngrxexmp.component';
import { MyChartComponent } from './Charts/my-chart/my-chart.component';
import { ChartPlotlyComponent } from './Charts/chart-plotly/chart-plotly.component';
 
const  routes:Routes
 = [
    {path : 'employeelist',component:EmployeeListComponent},
    {path : 'employeedetails',component:EmployeeDetailsComponent},
    {path : 'employeeform',component:EmployeeFormComponent},
    {path : 'ngrxExmp',component:NgrxexmpComponent},
    {path : 'mychart',component:MyChartComponent},
    {path : 'PolyChart',component:ChartPlotlyComponent},
    {path : '',component:EmployeeListComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
