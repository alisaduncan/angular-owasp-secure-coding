import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message';
import { MessageService } from './message.service';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-protected',
    template: `
    <p>
      This is the protected component. Only authenticated users should see this view.
    </p>

    <hr/>

    <h2>Messages</h2>
    <div *ngFor="let message of messages$ | async">
      <p class="user">{{message.user}} says</p>
      <p class="message">{{message.message}}</p>
    </div>
    <input #inputEl />
    <button (click)="sendMessage(inputEl.value)">Send message</button>
  `,
    styles: [`
    p {
      margin: 0.25rem;
    }

    .message {
      border: 1px solid gray;
      border-radius: 4px;
      margin-bottom: 1rem;
      padding: 0.5rem 0.25rem;
      width: fit-content;
    }
  `],
    standalone: true,
    imports: [NgFor, AsyncPipe]
})
export class ProtectedComponent {

  messageService = inject(MessageService);
  messages$: Observable<Message[]> = this.messageService.getMessages();

  sendMessage(message:string): void {
    this.messages$ = this.messageService.addMessage({user: 'Smarty', message});
  }
}
