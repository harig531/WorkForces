import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router,Event } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BnNgIdleService } from 'bn-ng-idle';
import { ConfirmDialogModel,CutomsDialogComponent } from './modules/employee/shared/cutoms-dialog/cutoms-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { count } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workforce';
  timeout:any;
  result: boolean=false;
  routerChanged = true;
  sessionTime:number=30;
  isPopUpOpen:boolean=false;
  constructor(public dialog: MatDialog,private bnIdle: BnNgIdleService,public translate: TranslateService,private router: Router,private spinner: NgxSpinnerService){
    translate.setDefaultLang('en');

    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
        this.routerChanged = true;
      }

      if (event instanceof NavigationEnd) {
      //  this.spinner.show();
        // Hide loading indicator
        this.timeout = setTimeout(() => {
          clearTimeout(this.timeout);
          this.routerChanged = false;
        }, 1000);
      }
    })

  }

  ngOnInit(): void {
       this.userLogout();
  }


  userLogout():void{
    this.bnIdle.startWatching(this.sessionTime).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        if(!this.isPopUpOpen)
        {
        const message = `Are you sure you want to Logout?`;
        const dialogData = new ConfirmDialogModel("Session Expired", message);
        const dialogRef = this.dialog.open(CutomsDialogComponent, {
          maxWidth: "500px",
          data: dialogData
        });
        this.isPopUpOpen=true;
        dialogRef.afterClosed().subscribe(dialogResult => {
          this.result = dialogResult;
          this.isPopUpOpen=false;
          if(this.result)
          {
            this.router.navigate(["employeelist"]);
            this.bnIdle.resetTimer();
          }
          else
          {
            this.bnIdle.resetTimer();
          }
        })

      }
    }
    });
  }

    setTransLanguage(lang:string){
      this.translate.use(lang);
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 500);
      }

}
