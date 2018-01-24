import { Injectable } from '@angular/core';

@Injectable()
export class CustomValidatorsService {

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
      'required': 'Email is required.'
    },
    'subject': {
      'required': 'Subject is required.'
    },
    'message': {
      'required': 'Send me something...',
      'maxlength': 'You reached you max character limit of 250.'
    }
  };
  constructor() { }



}
