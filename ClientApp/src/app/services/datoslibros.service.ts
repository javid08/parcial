import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Datoslibros } from '../models/datoslibros';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DatoslibrosService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addlibros(datoslibros: Datoslibros): Observable<Datoslibros> {
    alert(JSON.stringify(datoslibros));
    return this.http.post<Datoslibros>(this.baseUrl + 'api/libros', datoslibros, httpOptions)
      .pipe(tap((newlibros: Datoslibros) => this.log(`agrego nuevo libro w/ ISBN=${newlibros.ISBN}`)),
        catchError(this.handleError<Datoslibros>('addlibros')));
  }

  getAll(): Observable<Datoslibros[]> { 
    return this.http.get<Datoslibros[]>(this.baseUrl + 'api/libros')
      .pipe(tap(_ => this.log('se consulta datoslibros')),
        catchError(this.handleError<Datoslibros[]>('getAll', []))
      );
  }

  get(ISBN: number): Observable<Datoslibros> {
    const url = `${this.baseUrl + 'api/libros'}/${ISBN}`;
    return this.http.get<Datoslibros>(url).pipe(
      tap(_ => this.log(`fetched libros ISBN=${ISBN}`)),
      catchError(this.handleError<Datoslibros>(`getHero ISBN=${ISBN}`))
    );
  }

  update(datoslibros: Datoslibros): Observable<any> {
    const url = `${this.baseUrl + 'api/libros'}/${datoslibros.ISBN}`;
    return this.http.put(url, datoslibros, httpOptions).pipe(
      tap(_ => this.log(`update datoslibros ISBN=${datoslibros.ISBN}`)),
      catchError(this.handleError<any>('datoslibros'))
    );
  }

  delete(datoslibros: Datoslibros | number): Observable<Datoslibros> {
    const ISBN = typeof datoslibros === 'number' ? datoslibros : datoslibros.ISBN;
    const url = `${this.baseUrl + 'api/datoslibros'}/${ISBN}`;

    return this.http.delete<Datoslibros>(url, httpOptions).pipe(
      tap(_ => this.log(`delete libros ISBN=${ISBN}`)),
      catchError(this.handleError<Datoslibros>('delete libro'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    alert(`DatoslibrosService: ${message}`);
  }




}
