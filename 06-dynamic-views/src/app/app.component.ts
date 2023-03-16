import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <nav>
      <a routerLink="/search">Home</a>
      <a routerLink="/bypass">Bypass Sanitization</a>
      <a routerLink="/build-dom">Build DOM</a>
    </nav>
    <h1>
      Welcome to {{title}}!
    </h1>
    <router-outlet></router-outlet>
  `,
    styles: [`
    nav {
      display: flex;
      justify-content: flex-end;
    }
    nav > a+a {
      margin-left: 1rem;
    }
  `],
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class AppComponent {
  title = '06-dynamic-views';
}
