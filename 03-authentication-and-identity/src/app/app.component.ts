import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { SubscriptionLike } from 'rxjs';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <h1>Welcome to {{title}}!</h1>
    
    <router-outlet></router-outlet>
  `,
    styles: [`
    .toolbar {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .toolbar > span {
      margin-right: 2rem;
    }
  `],
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent implements OnInit, OnDestroy {
  title = '03-authentication-and-identity';
  oidcSecurityService: OidcSecurityService = inject(OidcSecurityService);

  private authSub$!: SubscriptionLike;

  ngOnInit(): void {
    this.authSub$ = this.oidcSecurityService.checkAuth().subscribe(
      ({ isAuthenticated }) => console.log('app authenticated', isAuthenticated));
  }

  ngOnDestroy(): void {
    this.authSub$.unsubscribe();
  }
}
