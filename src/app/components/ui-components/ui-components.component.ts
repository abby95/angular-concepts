import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-components',
  templateUrl: './ui-components.component.html',
  styleUrls: ['./ui-components.component.scss']
})
export class UiComponentsComponent implements OnInit {
  isVisible = true;
  Ribbons = ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8"];
  Role = "User"
  constructor() { }

  ngOnInit(): void {
  }

}
