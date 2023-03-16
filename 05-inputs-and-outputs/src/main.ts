import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { AppComponent } from './app/app.component';
import { ResultsComponent } from './app/results/results.component';
import { SearchComponent } from './app/search/search.component';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, ReactiveFormsModule),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter([
            { path: 'home', component: SearchComponent },
            { path: 'results', component: ResultsComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ],
        withComponentInputBinding())
    ]
})
  .catch(err => console.error(err));
