import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {
  observableStream: any;
  constructor() {

    //We are creating an Observable out of the Timer Function DataStream
    this.observableStream = Observable.create(this.DataStream)

  }

  ngOnInit(): void {
    // We are now subscribing to the Observable That we created Out Of The Timer Function 
    this.observableStream
      .subscribe(data => {
        console.log(data)
      })
  }

  DataStream(observer) { // this is a timer function that emits data every 1 second
    setInterval(() => {
      observer.next(Math.random())
    }, 1000)
  }



}
