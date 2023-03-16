import { AfterViewInit, Component, ElementRef, inject, Renderer2, SecurityContext, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-build-dom',
    template: `
    <h2>Appending to DOM</h2>
    <div #dangerEl></div>
    <hr/>
    <div #sanitizedEl></div>
  `,
    styles: [`
  `],
    standalone: true
})
export class BuildDomComponent implements AfterViewInit {

  @ViewChild('dangerEl', { static: false }) private el!: ElementRef<HTMLElement>;
  @ViewChild('sanitizedEl', { static: false }) private sanitizedEl!: ElementRef<HTMLElement>;
  private renderer: Renderer2 = inject(Renderer2);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  ngAfterViewInit(): void {
    const dom = '<a href="javascript:alert(\'danger!\')">Danger ahead</a>';

    // this.el.nativeElement.innerHTML = dom;
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', dom);

    // add explicit sanitization
    const sanitizedDom = this.sanitizer.sanitize(SecurityContext.HTML, dom);
    if (sanitizedDom) {
      this.sanitizedEl.nativeElement.innerHTML = sanitizedDom;
    }
  }
}

