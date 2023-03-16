import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { BuildDomComponent } from './app/build-dom/build-dom.component';
import { BypassComponent } from './app/bypass/bypass.component';
import { SearchComponent } from './app/search/search.component';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule),
        provideRouter([
            { path: 'search', component: SearchComponent },
            { path: 'bypass', component: BypassComponent },
            { path: 'build-dom', component: BuildDomComponent },
            { path: '', redirectTo: 'search', pathMatch: 'full' }
        ])
    ]
})
  .catch(err => console.error(err));
