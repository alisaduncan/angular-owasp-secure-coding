import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private readonly SERVER_URL = '/api/messages';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.SERVER_URL).pipe(
      map(res => res || [])
    );
  }

  addMessage(msg: Message): Observable<Message[]> {
    return this.http.post<Message[]>(this.SERVER_URL, msg, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).pipe(
      map(res => res || [])
    );
  }
}
