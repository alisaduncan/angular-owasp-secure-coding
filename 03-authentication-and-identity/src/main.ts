import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AuthModule } from 'angular-auth-oidc-client';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AuthModule.forRoot({
            config: {
                authority: 'your issuer', // Enter Issuer
                redirectUrl: `${window.location.origin}`,
                postLogoutRedirectUri: window.location.origin,
                clientId: 'your client id', // Enter ClientID
                scope: 'openid profile offline_access',
                responseType: 'code',
                silentRenew: true,
                useRefreshToken: true,
                renewTimeBeforeTokenExpiresInSeconds: 30,
            }
        })),
        provideRouter([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
        ])
    ]
})
  .catch(err => console.error(err));
