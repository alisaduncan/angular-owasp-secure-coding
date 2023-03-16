import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
    selector: 'app-root',
    template: `
    <h1>
      Welcome to {{title}}!
    </h1>
    
    <button (click)="httpCall()">make API call</button>
    <hr/>
    <h2>OWASP Top Ten</h2>
    <ol >
      <li *ngFor="let item of topTenList$ | async">{{item}}</li>
    </ol>
  `,
    styles: [],
    standalone: true,
    imports: [AsyncPipe, NgFor]
})
export class AppComponent {
  private httpClient:HttpClient = inject(HttpClient);
  title = 'api-app';
  topTenList$!: Observable<string[]>;

  httpCall(): void {
    this.topTenList$ = this.httpClient.get<string[]>('api/owaspTopTen');
  }
}
