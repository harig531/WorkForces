import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxexmpComponent } from './ngrxexmp.component';

describe('NgrxexmpComponent', () => {
  let component: NgrxexmpComponent;
  let fixture: ComponentFixture<NgrxexmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxexmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxexmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
