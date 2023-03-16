import { Component, inject } from '@angular/core';
import { UserDataResult, AuthenticatedResult, OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, map } from 'rxjs';
import { NgIf, AsyncPipe, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-home',
    template: `
    <ng-container *ngIf="isAuthenticated$ | async as isAuthenticated; else noAuth">
      <div class="auth">
        <button (click)="logout()">Logout</button>
      </div>
      <hr />

      <p>Is Authenticated: {{ isAuthenticated }}</p>
      <p>Claims</p>
      <pre>{{ claims$ | async | json }}</pre>
    </ng-container>

    <ng-template #noAuth>
      <div class="auth">
        <button (click)="login()">Login</button>
      </div>
      <hr />
    </ng-template>
  `,
    styles: [`
    .auth {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  `],
    standalone: true,
    imports: [NgIf, AsyncPipe, JsonPipe]
})
export class HomeComponent {
  oidcSecurityService: OidcSecurityService = inject(OidcSecurityService);

  claims$: Observable<UserDataResult> = this.oidcSecurityService.userData$;
  name$: Observable<UserDataResult> = this.oidcSecurityService.userData$.pipe(map(d => d.userData?.['name']));
  isAuthenticated$: Observable<boolean> = this.oidcSecurityService.isAuthenticated$.pipe(
    map((r: AuthenticatedResult) => r.isAuthenticated)
  );

  login(): void {
    this.oidcSecurityService.authorize();
  }

  logout(): void {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }
 }
