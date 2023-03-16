import { inject } from '@angular/core';
import { 
  ActivatedRouteSnapshot,
  CanMatchFn,
  Route,
  RouterStateSnapshot,
  UrlSegment 
} from '@angular/router';
import { AuthService } from '../auth.service';

export const roleIsAdminFn: CanMatchFn = (
  route: Route,
  segments: UrlSegment[],
  authService = inject(AuthService)) => (authService.isLoggedIn && authService.role === 'admin');

export const isAuthenticatedCanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot, 
  authService = inject(AuthService)) => authService.isLoggedIn;

export const isAuthenticatedCanMatchFn = (
  route: Route,
  segments: UrlSegment[],
  authService = inject(AuthService)) => authService.isLoggedIn;