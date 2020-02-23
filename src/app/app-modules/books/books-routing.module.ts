import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {APP_ROUTE_SUFFIXES, APP_ROUTES} from '../../core/config/app-routes';
import {BookListComponent} from './components/book-list/book-list.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';
import {BookEditComponent} from './components/book-edit/book-edit.component';
import {ReservationListComponent} from './components/reservation-list/reservation-list.component';
import {ReservationDetailsComponent} from './components/reservation-details/reservation-details.component';

const booksRoutes = APP_ROUTES.home.books;
const routes: Routes = [
  {path: booksRoutes.path, component: BookListComponent},
  {path: booksRoutes.path + APP_ROUTE_SUFFIXES.id, component: BookDetailsComponent},
  {path: booksRoutes.path + APP_ROUTE_SUFFIXES.edit + APP_ROUTE_SUFFIXES.id, component: BookEditComponent},
  {path: booksRoutes.reservations.path, component: ReservationListComponent},
  {path: booksRoutes.reservations.path + APP_ROUTE_SUFFIXES.id, component: ReservationDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
