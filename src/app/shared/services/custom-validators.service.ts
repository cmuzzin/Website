import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import each from 'lodash-es/each';
import omit from 'lodash-es/omit';

@Injectable()

export class CustomValidatorsService {
  form: FormGroup;


  static formErrors = {
    'name': '',
    'email': '',
    'subject': '',
    'message': '',
  };
  static validationMessages = {
    'name': {
      'required': 'Name is required.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Invalid email.'
    },
    'subject': {
      'required': 'Subject is required.'
    },
    'message': {
      'required': 'Send me something...',
      'maxlength': 'You reached you max character limit of 250.'
    }
  };
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(250)]]
    });
    this.form.valueChanges.debounceTime(500).subscribe(() => this.updateErrorMessages());
  };

  private updateErrorMessages() {
    const form = this.form;
    each(omit(CustomValidatorsService.formErrors, ''), (msg, field) => {
      CustomValidatorsService.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = CustomValidatorsService.validationMessages[field];
        each(control.errors, (val2, key) => {
          CustomValidatorsService.formErrors[field] = messages[key];
        });
      }
    });
  }

}
