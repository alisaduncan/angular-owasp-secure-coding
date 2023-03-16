import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <nav>
      <a routerLink="/home"></a>
    </nav>
    <h1>
      Welcome to {{title}}!
    </h1>


    <router-outlet></router-outlet>
  `,
    styles: [],
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class AppComponent {
  title = '<span>05-handling-inputs-and-outputs</span>';
}
