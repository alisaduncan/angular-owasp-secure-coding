import { Injectable } from '@angular/core';

export type ROLE = 'enduser' | 'admin';
export interface AuthState {
  isAuthenticated: boolean;
  role: ROLE;
}

const defaultAuthState: AuthState = {
  isAuthenticated: false,
  role: 'enduser'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState:AuthState = defaultAuthState;
  get isLoggedIn() {
    return this.authState.isAuthenticated;
  }
  get role() {
    return this.authState.role;
  }

  loginAsEndUser(): void {
    this.authState = { isAuthenticated: true, role: 'enduser' };
  }

  loginAsAdmin(): void {
    this.authState = { isAuthenticated: true, role: 'admin' };
  }

  public logout(): void {
    this.authState = defaultAuthState;
  }
}

