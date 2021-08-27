import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './modules/employee/components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './modules/employee/components/employee-details/employee-details.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeRegisterService } from './modules/employee/shared/employee-register.service';
import { EmployeeServiceService } from './modules/employee/shared/employee-service.service';
import { CutomsDialogComponent } from './modules/employee/shared/cutoms-dialog/cutoms-dialog.component';
import { CustomMaterialModuleModule } from './modules/employee/shared/custom-material-module/custom-material-module.module';
import { EmployeeFormComponent } from './modules/employee/components/employee-form/employee-form.component';
import { MatMenuModule} from '@angular/material/menu'
import { NgxSpinnerModule } from "ngx-spinner";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BnNgIdleService } from 'bn-ng-idle';
import { NgrxexmpComponent } from './ngrx/ngrxexmp/ngrxexmp.component';
import { CustomobserbalComponent } from './ngrx/customobserbal/customobserbal.component';
import { MyChartComponent } from './Charts/my-chart/my-chart.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { ChartPlotlyComponent } from './Charts/chart-plotly/chart-plotly.component';


PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,CutomsDialogComponent,EmployeeFormComponent, NgrxexmpComponent, CustomobserbalComponent, MyChartComponent, ChartPlotlyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    CustomMaterialModuleModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgxSpinnerModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    PlotlyModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }
    ),
  ],
  providers: [EmployeeRegisterService,EmployeeServiceService,BnNgIdleService],
  entryComponents: [CutomsDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
