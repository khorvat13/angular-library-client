import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoginComponent} from './components/login/login.component';
import {AuthorizationGuard} from './guards/authorization.guard';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {LayoutComponent} from './components/layout/layout.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {APP_ROUTES} from './config/app-routes';

const routes: Routes = [
  {
    path: APP_ROUTES.home.path, component: LayoutComponent, canActivate: [AuthorizationGuard], children: [
      {
        path: APP_ROUTES.home.dashboard.path,
        pathMatch: 'full',
        loadChildren: () => import('../app-modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: APP_ROUTES.home.books.path,
        loadChildren: () => import('../app-modules/books/books.module').then(m => m.BooksModule)
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
  {path: APP_ROUTES.login.path, component: LoginComponent},
  {path: APP_ROUTES.signUp.path, component: SignUpComponent},
  {path: APP_ROUTES.forgotPassword.path, component: ForgotPasswordComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
