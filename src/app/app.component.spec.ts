import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CustomMaterialModuleModule } from './modules/employee/shared/custom-material-module/custom-material-module.module';
import { TranslateService } from '@ngx-translate/core'
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { MatMenuModule } from '@angular/material/menu';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CustomMaterialModuleModule,
        HttpClientTestingModule,
        MatMenuModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [ TranslateService ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'workforce'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('workforce');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('workforce app is running!');
  // });
});
