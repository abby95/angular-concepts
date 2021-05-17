import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  departments = [
    { id: 1, department: "IOT", enrolled: 25 },
    { id: 2, department: "Artificial Intelligence", enrolled: 5 },
    { id: 3, department: "Machine Learning", enrolled: 15 },
    { id: 4, department: "Industrial IoT", enrolled: 32 },
    { id: 5, department: "Storage Admin", enrolled: 4 },

  ]

  rangeMax = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    var max = this.departments.reduce((a, b) => a.enrolled > b.enrolled ? a : b);

    // var arr = [1, 2, 3];
    // var max = arr.reduce(function (a, b) {
    //   return Math.max(a, b);
    // });
    console.log(max)
  }

  navigate(department) {
    this.router.navigate(["department", department.id])
  }
}
