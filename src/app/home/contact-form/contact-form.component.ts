import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() formErrors: any;
  @Output() onFormSubmit: EventEmitter<FormGroup> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.onFormSubmit.emit(this.form);
  }

}
