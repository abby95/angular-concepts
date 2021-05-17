import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private subject = new Subject<any>()
  constructor() { }

  emitData(data) {
    this.subject.next(data)
  }

  observeData() {
    return this.subject.asObservable()
  }
}
