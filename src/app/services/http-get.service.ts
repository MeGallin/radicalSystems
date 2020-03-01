import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpGetService {
  constructor(private httpGet$: HttpClient) {}

  // getContent() {
  //   const customerUrl = '../assets/customers.json';
  //   return this.httpGet$.get(customerUrl, { responseType: 'json' });
  // }

  getContent(): Observable<any> {
    const customerUrl = '../assets/customers.json';
    return this.httpGet$
      .get(customerUrl)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
