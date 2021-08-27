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
    layout: {autosize: true, title: 'A Fancy Plot'}
};

public graph2 = {
  data: [
    {
      y: [8, 19, 20, 22],
      mode: 'lines+markers',
      name: 'AvgResponseTime',
    },
    {    
      y: [10, 15, 13, 17],
      mode: 'lines+markers',
      name: 'FailedPerSecond',
    },
    {
      y: [12, 9, 15, 12],
      mode: 'lines+markers',
      name: 'SuccessPerSecond',
    }
  ],
  layout: {autosize: true, title: 'MARKTING API'},
};

public graph3 = {
  data: [{  y: [2, 5, 3], type: 'bar' }],
  layout: {autosize: true, title: 'A Fancy Plot'},
};

  constructor() {
    
   }
  
  //  pData: [];
  //  pLayout;

  ngOnInit(): void {
    var trace1 = {    
      y: [10, 15, 13, 17],
      mode: 'markers'
    };
    
    var trace2 = {
      y: [16, 5, 11, 9],
      mode: 'lines'
    };
    
    var trace3 = {
      y: [12, 9, 15, 12],
      mode: 'lines+markers'
    };
   /// this.pData=[trace1,trace2,trace3]
  }

}
