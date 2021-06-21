import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  topic: string = "";
  constructor() {

    // sessionStorage.setItem('topic', 'ACTIVATED ROUTE')
    this.topic = sessionStorage.getItem('topic');
  }

  ngOnInit(): void {
  }

  setTopic(topic) {
    sessionStorage.setItem('topic', topic)

  }
}
