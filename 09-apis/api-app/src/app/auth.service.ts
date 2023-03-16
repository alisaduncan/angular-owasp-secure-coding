import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public getAccessToken(): string {
    return 'access_token';
  }
}