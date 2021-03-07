import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router,Event } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workforce';
  timeout:any;
  routerChanged = true;
  constructor(public translate: TranslateService,private router: Router,private spinner: NgxSpinnerService){
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

    setTransLanguage(lang:string){
      this.translate.use(lang);
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 500);
      }

}
