import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { BooksService } from '../services/books.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  bookSubcription: Subscription;

  constructor(
    private booksService: BooksService,
    private router: Router
  ) { }

  ngOnInit() {
    this.bookSubcription = this.booksService.booksSubject.subscribe(
      (book: Book[]) => {
        this.books = book;
      }
    );
    this.booksService.emitBooks();
  }

  onNewBook() {
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Book) {
    this.booksService.removeBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view' + id])
  }

  ngOnDestroy() {
    this.bookSubcription.unsubscribe();
  }

}
