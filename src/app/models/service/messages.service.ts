import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Message } from '@app/models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private url:string = 'http://localhost:3000/messages';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.url);
  }

  postMessage(message: Message): Observable<Message> {
    const stringifyMessage = JSON.stringify(message);
    return this.http.post<Message>(this.url, stringifyMessage, this.httpOptions);
    /* this.http.post(this.url, stringifyMessage, this.httpOptions).pipe(
      tap((message: any) => console.log(`added Message with text= ${message.text}`)),
      catchError((error) => this.handleError(error))
    ); */
  }

  // source: https://angular.io/guide/http-handle-request-errors
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
