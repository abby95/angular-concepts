import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service"
@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.scss']
})
export class HttpInterceptorComponent implements OnInit {

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getUsers()
      .subscribe(res => {
        console.log(res)
      })
  }

}
