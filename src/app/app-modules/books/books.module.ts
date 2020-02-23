import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BooksRoutingModule} from './books-routing.module';
import {BookListComponent} from './components/book-list/book-list.component';
import {BookEditComponent} from './components/book-edit/book-edit.component';
import {ReservationListComponent} from './components/reservation-list/reservation-list.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';
import {ReservationDetailsComponent} from './components/reservation-details/reservation-details.component';


@NgModule({
  declarations: [BookListComponent, BookEditComponent, ReservationListComponent, BookDetailsComponent, ReservationDetailsComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
