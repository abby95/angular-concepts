import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subject-observer-one',
  templateUrl: './subject-observer-one.component.html',
  styleUrls: ['./subject-observer-one.component.scss'],
})
export class SubjectObserverOneComponent implements OnInit {
  dataObserved: string = 'Default Value';
  subscription: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .observeData()
      .subscribe((data) => (this.dataObserved = data));
  }

  ngOnInit(): void { }
}
