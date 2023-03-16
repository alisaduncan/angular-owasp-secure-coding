import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ROLE } from '../user.service';

@Directive({
    selector: '[appAdmin]',
    standalone: true
})
export class AdminDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set appAdmin(role: ROLE) {
    if (role === 'admin') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}