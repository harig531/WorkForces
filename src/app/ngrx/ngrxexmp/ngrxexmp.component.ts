import { AfterViewInit, Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-ngrxexmp',
  templateUrl: './ngrxexmp.component.html',
  styleUrls: ['./ngrxexmp.component.css']
})
export class NgrxexmpComponent implements OnInit,AfterViewInit {

  postArrayData=[
    {title: 'Name',names:'Guntu'},
    {title: 'Name',names:'G1untu'},
    {title: 'Name',names:'Gu1ntu'},
    {title: 'Name',names:'Gu1ntu'},
  ];

  postObserbableData$=from(this.postArrayData);

  promise = new Promise((reslove,reject)=>{
    setTimeout(() => {reslove("reslove the promise ans sending data!")},3000)
  })
  promiseObserbableData$=from(this.promise);


  constructor() {

    this.postObserbableData$.subscribe({
      next: (data: any) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('completed Action')
    });

    
    this.promiseObserbableData$.subscribe({
      next: (data: any) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('completed Action by reslove')
    });   

   }

   ngAfterViewInit(): void {
       fromEvent(document.getElementById('click-button')!,'click').subscribe(
        {
          next: (data: any) => console.log(data),
          error: (error) => console.log(error),
          complete: () => console.log('completed Action by reslove')
        }
       );
  }

  ngOnInit(): void {
  }

}
