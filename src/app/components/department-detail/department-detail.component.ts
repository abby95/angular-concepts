import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {
  departmentId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.departmentId = id
  }

}
