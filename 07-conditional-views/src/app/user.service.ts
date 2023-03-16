import { Injectable } from '@angular/core';

export type ROLE = 'enduser' | 'admin';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  role: ROLE = 'enduser';
}
