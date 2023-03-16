import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
    <p>Hello! This is the HomeComponent. Everyone can see this component - no authentication required!</p>
  `,
    styles: [],
    standalone: true
})
export class HomeComponent { }
