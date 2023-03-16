import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/profile">Profile</a>
      <a routerLink="/admin">Admin</a>
    </nav>
    <h1>
      Welcome to {{title}}!
    </h1>
    <ng-container *ngIf="this.authService.isLoggedIn; else noAuth">
      <button (click)="logout()">Logout</button>
    </ng-container>

    <ng-template #noAuth>
      <button (click)="login()">Login</button>
      <button (click)="loginAsAdmin()">Login as Admin</button>
    </ng-template>

    <h2>User info</h2>
    <p>User is authenticated: {{this.authService.isLoggedIn}}</p>
    <p>User role is: {{this.authService.role}}</p>

    <hr/>
    <router-outlet></router-outlet>
  `,
    styles: [`
    nav {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      a + a {
        margin-left: 1rem;
      }
    }
  `],
    standalone: true,
    imports: [RouterLink, NgIf, RouterOutlet]
})
export class AppComponent {
  title = '08-routes';

  public authService:AuthService = inject(AuthService);

  login(): void {
    this.authService.loginAsEndUser();
  }

  loginAsAdmin(): void {
    this.authService.loginAsAdmin();
  }

  logout(): void {
    this.authService.logout();
  }
}
