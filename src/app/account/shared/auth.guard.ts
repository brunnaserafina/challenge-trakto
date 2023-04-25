import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const tokenString: string | null = localStorage?.getItem('trakto');

    const token = tokenString ? JSON.parse(tokenString).acess_token : null;

    if (token !== null) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
