import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workforce';

  constructor(public translate: TranslateService){
    translate.setDefaultLang('en');
    }

    setTransLanguage(lang:string){
      this.translate.use(lang);
      }

}
