import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {Gallery} from '../dtos/gallary';

@Injectable({
  providedIn: 'root'
})

export class ImagesService {
  private imageUrl = 'assets/api/images/images.json';

  constructor(private http: HttpClient) {
  }

  getGalleries() {
    return this.http.get(this.imageUrl).pipe(
      map((data: any) => data.map(item => new Gallery(item))),
      catchError(this.handleError));
  }

  getGallery(id) {
    return this.http.get(this.imageUrl).pipe(
      map((data: any) => {
        const gallery = new Gallery(data.find(item => item.id === id));
        return gallery;
      }),
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }

}
