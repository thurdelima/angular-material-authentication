import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Person } from "./person";
import { Product } from "./product";

import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MainService {
  readonly url = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.url}/peoples`).pipe(
      tap(p => console.log(p)),
      catchError(e => {
        console.log(e);
        return throwError(e);
      })
    );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`).pipe(
      tap(p => console.log(p)),
      catchError(e => {
        console.log(e);
        return throwError(e);
      })
    );
  }
}
