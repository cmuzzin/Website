import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from 'rxjs/Rx';
import {Gallery} from "../dtos/gallary";

@Injectable()
export class ImagesService {
  private imageUrl = 'assets/api/images/images.json';

  constructor(private http: HttpClient) {
  }

  getGalleries() {
    return this.http.get(this.imageUrl)
      .map((data: Array<Gallery>) => data.map(val => new Gallery(val)))
      .catch(this.handleError)
  };

  getGallery(id: number) {
     return this.http.get(this.imageUrl)
       .map((data: Array<Gallery>) => {
         const gallery = data.find(val => val.galleryId === id);
         return new Gallery(gallery);
       })
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
