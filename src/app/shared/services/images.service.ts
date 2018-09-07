import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class ImagesService {
  toggleGallery: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  static getImages() {
    return [
      {
        collection: 'One',
        icon: 'fa-spotify'
      },
      {
        collection: 'Two',
        icon: 'fa-tag'
      }, {
        collection: 'Three',
        icon: 'fa-calendar'
      },
      {
        collection: 'Four',
        icon: 'fa-building'
      },
      {
        collection: 'Five',
        icon: 'fa-envelope-o'
      }
    ]
  };
}
