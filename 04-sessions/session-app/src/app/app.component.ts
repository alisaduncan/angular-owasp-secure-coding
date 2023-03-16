import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Observable, map, filter, SubscriptionLike, distinctUntilKeyChanged, skip } from 'rxjs';
import { AuthService, AuthState } from './auth.service';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    template: `
    <header class="toolbar">
      <ng-container *ngIf="isAuthenticated$ | async as isAuthenticated; else noAuth">
        <button (click)="logout()">Logout</button>  
        <div class="routes">
          <nav>
            <a routerLink="/home">Home</a>
            <a routerLink="/protected">Protected view</a>
          </nav>
          <span *ngIf="name$ | async as name">Hello {{name}}!</span>
        </div>
      </ng-container>

      <ng-template #noAuth>
        <button (click)="login()">Login</button>
      </ng-template>
    </header>
    
    <hr />
    <h1>Welcome to {{title}}!</h1>
    
    <router-outlet></router-outlet>
  `,
    styles: [`
    .toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row-reverse;
    }

    .routes {
      display: flex;
    }

    nav {
      margin-right: 2rem;
    }

    nav > a + a {
      margin-left: 0.5rem;
    }
  `],
    standalone: true,
    imports: [NgIf, RouterLink, RouterOutlet, AsyncPipe]
})
export class AppComponent implements OnInit, OnDestroy {
  title = '04-sessions';
  router: Router = inject(Router);
  authService: AuthService = inject(AuthService);

  isAuthenticated$: Observable<boolean> = this.authService.auth$.pipe(map((authState: AuthState) => authState.isAuthenticated));
  name$: Observable<string|undefined> = this.authService.auth$.pipe(map((authState: AuthState) => authState.name));

  private authSub$!: SubscriptionLike;

  ngOnInit(): void {
    this.authSub$ = this.authService.auth$.pipe(
      skip(1),
      distinctUntilKeyChanged('isAuthenticated'),
      filter((state: AuthState) => !state.isAuthenticated)
    ).subscribe(
      {
          next: (value) => {
            console.log('Token expired', value);
    
            // check current route
            this.router.navigate(['/home']);
          }
        }
    );
}

  ngOnDestroy(): void {
    this.authSub$.unsubscribe();
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}

