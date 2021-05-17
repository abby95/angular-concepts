import { Component, OnInit } from '@angular/core';
import { UiService } from "../../../services/ui.service"
@Component({
  selector: 'app-subject-emitter',
  templateUrl: './subject-emitter.component.html',
  styleUrls: ['./subject-emitter.component.scss']
})
export class SubjectEmitterComponent implements OnInit {
  data: string = ""
  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  emitData() {
    this.uiService.emitData(this.data)
  }
}
