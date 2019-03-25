import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../models/book.interface';

@Injectable({ providedIn: 'root' })
export class BookService {
  baseUrl = 'assets/db.json';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  haveRead(book: Book): Observable<any> {
    console.log(this.baseUrl);
    console.log(book);
    return this.http.put(`${this.baseUrl}/${book.id}`, book);
  }
}
