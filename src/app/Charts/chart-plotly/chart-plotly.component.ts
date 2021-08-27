import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-plotly',
  templateUrl: './chart-plotly.component.html',
  styleUrls: ['./chart-plotly.component.css']
})
export class ChartPlotlyComponent implements OnInit {

  public graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {width: 320, height: 240, title: 'A Fancy Plot'}
};
  constructor() { }

  ngOnInit(): void {
   
  }

}
