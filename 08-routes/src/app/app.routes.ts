import { Routes } from '@angular/router';
import { isAuthenticatedCanActivateFn, roleIsAdminFn } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ isAuthenticatedCanActivateFn ] 
  },
  { 
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
    canMatch: [ roleIsAdminFn ] 
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
