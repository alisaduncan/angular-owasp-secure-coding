import { Component, inject, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-bypass',
    template: `
    <iframe 
      [src]="bypassSecurityVideoLink"
      width="560" height="315"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  `,
    standalone: true
})
export class BypassComponent implements OnInit {
  private sanitizer: DomSanitizer = inject(DomSanitizer);
  private readonly videoHost = 'https://www.youtube.com/embed/';
  bypassSecurityVideoLink!: SafeResourceUrl;

  ngOnInit(): void {
    const videoId = 'uu7o6hEswVQ';
    const videoSrc = `${this.videoHost}${videoId}`;
    this.bypassSecurityVideoLink = this.sanitizer.bypassSecurityTrustResourceUrl(videoSrc);
  }
}

