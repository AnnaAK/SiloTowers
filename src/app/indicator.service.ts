import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Indicator } from './indicator';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  private indicatorsUrl = 'api/indicators';  // URL to web api

  /** GET indicators from the server */
  getIndicators(): Observable<Indicator[]> {
    return this.http.get<Indicator[]>(this.indicatorsUrl)
      .pipe(
        tap(_ => console.log('indicators succesfully received')),
        catchError(this.handleError('getIndicators', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getIndicator(id: number): Observable<Indicator> {
    const url = `${this.indicatorsUrl}/${id}`;
    return this.http.get<Indicator>(url).pipe(
      tap(_ => console.log(`indicator id=${id}`)),
      catchError(this.handleError<Indicator>(`getIndicator id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  constructor( private http: HttpClient,
               private messageService: MessageService) { }
}
