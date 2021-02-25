import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomsDialogComponent } from './cutoms-dialog.component';

describe('CutomsDialogComponent', () => {
  let component: CutomsDialogComponent;
  let fixture: ComponentFixture<CutomsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
