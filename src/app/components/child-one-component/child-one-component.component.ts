import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-one-component',
  templateUrl: './child-one-component.component.html',
  styleUrls: ['./child-one-component.component.scss']
})
export class ChildOneComponentComponent implements OnInit {
  @Input() name: string;
  // localName: string;
  @Output() hideParentInput: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    // this.localName = this.name
  }

  EventEmitToParent() {
    this.hideParentInput.emit('Child One Component')
  }

  ngOnChanges() {
    // alert("On Changes" + this.name.toUpperCase())
    this.name = this.name.toUpperCase()
  }

}
