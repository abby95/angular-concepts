import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-observer-two',
  templateUrl: './subject-observer-two.component.html',
  styleUrls: ['./subject-observer-two.component.scss']
})
export class SubjectObserverTwoComponent implements OnInit {
  dataObserved: string = "Default Value"

  constructor() { }

  ngOnInit(): void {
  }

}
