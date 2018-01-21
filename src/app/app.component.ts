import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 form: FormGroup;

  constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
      this.createForm();
  };

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  };

  onSubmit() {
    const {name, email, subject, message} = this.form.value;
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Subject: ${subject}</div>
      <div>Message: ${message}</div>
    `;
    let formRequest = { name, email, subject, message, html };
    this.db.list('/messages').push(formRequest);
    this.form.reset();
  };

  scroll(el) {
    el.scrollIntoView();
  }
}
