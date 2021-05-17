import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-two-component',
  templateUrl: './child-two-component.component.html',
  styleUrls: ['./child-two-component.component.scss']
})
export class ChildTwoComponentComponent implements OnInit {
  @Input() name: string;
  @Output() hideParentInput: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  hideparent() {
    this.hideParentInput.emit("Child Two Component");
  }
}
