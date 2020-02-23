import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthorizationService} from '../services/authorization.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {

  constructor(private authorizationService: AuthorizationService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authorizationService.isAuthorized) {
      this.router.navigate(['/login'], {queryParams: {route: state.url}});
    }

    return this.authorizationService.isAuthorized;
  }
}
