import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { ROLE } from '../user.service';

@Directive({
    selector: '[appHasRole]',
    standalone: true
})
export class HasRoleDirective implements OnChanges {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  private role!: ROLE;
  private userRole: ROLE = 'enduser';

  @Input() set appHasRole(role: ROLE) {
    this.role = role; // currently assumes this remains static
  }

  @Input() set appHasRoleUserRole(userRole: ROLE) {
    this.userRole = userRole;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appHasRoleUserRole'].currentValue !== changes['appHasRoleUserRole'].previousValue) {
      if (this.role === this.userRole) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }
  }
}