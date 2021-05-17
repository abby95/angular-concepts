import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {
  showParentChildInterface: boolean = true;
  showSubjectInterface: boolean = false
  childOneName: string = ""
  childTwoName: string = ""
  message: string = ""

  constructor() { }

  ngOnInit(): void {
  }
  hideInputComponent(component) {
    this.showParentChildInterface = false;
    this.showSubjectInterface = false;
    this.message = `The Input Component is Hidden By ${component}`
  }
}
