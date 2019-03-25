import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

import { Book } from '../models/book.interface';

import { BookService } from '../services/books.service';

@Component({
  selector: 'app-to-read',
  templateUrl: './to-read.component.html',
  styleUrls: ['./to-read.component.css']
})
export class ToReadComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => (this.books = books.books));
  }

  //triggered via click handler
  onReadIt(book): void {
    book.haveRead = true;
    this.bookService.haveRead(book).subscribe(data => {
      console.log('do something');
    });
  }
}
