import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPlotlyComponent } from './chart-plotly.component';

describe('ChartPlotlyComponent', () => {
  let component: ChartPlotlyComponent;
  let fixture: ComponentFixture<ChartPlotlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPlotlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPlotlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
