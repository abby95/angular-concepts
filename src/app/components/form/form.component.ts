import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formValue: any;
  constructor() { }

  ngOnInit(): void {
  }
  submitForm(form: NgForm) {
    console.log(form)
    this.formValue = JSON.stringify(form.value, null, 2)
  }
}
