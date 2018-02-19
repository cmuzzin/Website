import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {CustomValidatorsService} from './shared/services/custom-validators.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/of';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;
  formErrors = CustomValidatorsService.formErrors;


  constructor(private db: AngularFireDatabase,
              private customValidatorService: CustomValidatorsService,
              private toastr: ToastrService) {
    this.form = this.customValidatorService.form;
  }

  onSubmit() {
    const {name, email, subject, message} = this.form.value;
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href='mailto:${email}'>${email}</a></div>
      <div>Subject: ${subject}</div>
      <div>Message: ${message}</div>
    `;
    const formRequest = {name, email, subject, message, html};
    this.db.list('/messages').push(formRequest);
    this.toastr.success('Thanks!', 'I received your message!');
    this.form.reset();
  };
}
