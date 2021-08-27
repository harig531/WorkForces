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
  
   pdata = [
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "AvgResponseTime",
        "time": "2020-11-09 16:27:50",
        "value": 43
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "AvgResponseTime",
        "time": "2020-11-09 16:27:51",
        "value": 4
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "AvgResponseTime",
        "time": "2020-11-09 16:27:52",
        "value": 4
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "AvgResponseTime",
        "time": "2020-11-09 16:27:53",
        "value": 3
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "AvgResponseTime",
        "time": "2020-11-09 16:27:54",
        "value": 5
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "AvgResponseTime",
        "time": "2020-11-09 16:27:55",
        "value": 12
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "AvgResponseTime",
        "time": "2020-11-09 16:27:56",
        "value": 20
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "AvgResponseTime",
        "time": "2020-11-09 16:27:57",
        "value": 14
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "FailedPerSecond",
        "time": "2020-11-09 16:27:50",
        "value": 4465
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "FailedPerSecond",
        "time": "2020-11-09 16:27:51",
        "value": 5564
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "FailedPerSecond",
        "time": "2020-11-09 16:27:52",
        "value": 4873
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "FailedPerSecond",
        "time": "2020-11-09 16:27:53",
        "value": 5948
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "FailedPerSecond",
        "time": "2020-11-09 16:27:54",
        "value": 4265
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "FailedPerSecond",
        "time": "2020-11-09 16:27:55",
        "value": 854
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "FailedPerSecond",
        "time": "2020-11-09 16:27:56",
        "value": 1482
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "FailedPerSecond",
        "time": "2020-11-09 16:27:57",
        "value": 182
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "SuccessPerSecond",
        "time": "2020-11-09 16:27:50",
        "value": 0
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "SuccessPerSecond",
        "time": "2020-11-09 16:27:51",
        "value": 0
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "SuccessPerSecond",
        "time": "2020-11-09 16:27:52",
        "value": 0
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "SuccessPerSecond",
        "time": "2020-11-09 16:27:53",
        "value": 0
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "SuccessPerSecond",
        "time": "2020-11-09 16:27:54",
        "value": 0
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "SuccessPerSecond",
        "time": "2020-11-09 16:27:55",
        "value": 0
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "SuccessPerSecond",
        "time": "2020-11-09 16:27:56",
        "value": 0
    },
    {
        "testStepActionConfigId": 1266,
        "requestDescription": "MarketSettingsAPI - Get Bulk Settings",
        "testRunNumber": 3,
        "type": "SuccessPerSecond",
        "time": "2020-11-09 16:27:57",
        "value": 0
    }
];

result = this.pdata.reduce(function (r, a) {
  r[a.type] = r[a.type] || [];
  r[a.type].push(a.value);
  return r;
}, Object.create(null));


public graph4 = {
    data: [
      {
        y: this.result.SuccessPerSecond,
        mode: 'lines+markers',
        name: 'Success Per Second',
      },
      {    
        y: this.result.FailedPerSecond,
        mode: 'lines+markers',
        name: 'Failed Per Second',
      },
      {
        y: this.result.AvgResponseTime,
        mode: 'lines+markers',
        name: 'Average Response Time',
      }
    ],
    layout: {autosize: true, title: 'MarketSettingsAPI - Get Bulk Settings'},
  };

  
  ngOnInit(): void {
   
 
    };
   /// this.pData=[trace1,trace2,trace3]
  

}
