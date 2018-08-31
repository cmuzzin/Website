import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from 'rxjs/Rx';
import {Gallery} from "../dtos/gallary";

@Injectable()
export class ImagesService {
  private imageUrl = 'assets/api/images/images.json';
  toggleGallery: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  getImages() {
    return this.http.get(this.imageUrl)
      .map((data: Array<Gallery>) => data.map(val => new Gallery(val)))
      .catch(this.handleError)
  };

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return Observable.throw(errorMessage);
  }

}
