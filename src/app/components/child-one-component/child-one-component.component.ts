import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one-component',
  templateUrl: './child-one-component.component.html',
  styleUrls: ['./child-one-component.component.scss']
})
export class ChildOneComponentComponent implements OnInit {
  @Input() name: string;
  @Output() hideParentInput: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  EventEmitToParent() {
    this.hideParentInput.emit('Child One Component')
  }

}
