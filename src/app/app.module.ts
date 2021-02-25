import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './modules/employee/components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './modules/employee/components/employee-details/employee-details.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import { ToastrModule } from 'ngx-toastr';
import { EmployeeRegisterService } from './modules/employee/shared/employee-register.service';
import { EmployeeServiceService } from './modules/employee/shared/employee-service.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,ReactiveFormsModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }
    ),
  ],
  providers: [EmployeeRegisterService,EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
