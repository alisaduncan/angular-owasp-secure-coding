import { Component, inject } from '@angular/core';
import { UserService, ROLE } from './user.service';
import { HasRoleDirective } from './directives/has-role.directive';
import { AdminDirective } from './directives/admin.directive';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    template: `
    <h1>
      Welcome to {{title}}!
    </h1>

    Select role
    <button (click)="changeRole('enduser')">End user</button>
    <button (click)="changeRole('admin')">Admin</button>
    <h2>User information</h2>
    <p>Role: {{userService.role}}</p>

    <p *ngIf="userService.role === 'enduser'">Message for endusers using <code>*ngIf</code></p>

    <p *appAdmin="userService.role">Secret admin message using <code>*appAdmin</code> directive!</p>
    
    <p *appHasRole="'enduser'; userRole:userService.role">Hello to all the endusers out there using <code>*appHasRole</code> directive</p>
    <p *appHasRole="'admin'; userRole:userService.role">Hello to all the admins out there using <code>*appHasRole</code> directive</p>
    
  `,
    styles: [],
    standalone: true,
    imports: [NgIf, AdminDirective, HasRoleDirective]
})
export class AppComponent {
  title = '07-conditional-views';
  userService = inject(UserService);

  changeRole(role: ROLE): void {
    this.userService.role = role;
  }
}
