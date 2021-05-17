import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {




  intercept(request: HttpRequest<any>, next: HttpHandler) {

    // You need to put your logic in here
    // What you want to do with the HTTP Request that you intercepted

    // You can get the Auth token from the Session/Local Storage and add it to the request and then send it
    const AuthToken = "My Auth Token"
    const newRequest = request.clone({
      setHeaders: { Authorization: AuthToken }
    })
    // return next.handle(request) The Normal Request
    return next.handle(newRequest)

  }

}
