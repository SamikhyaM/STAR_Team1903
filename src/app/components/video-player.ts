import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  template: `<iframe [src]="url()" title="Lesson video" allowfullscreen></iframe>`,
  styles: `iframe { width: 100%; aspect-ratio: 16 / 9; border: 0; border-radius: var(--radius); }`,
})
export class VideoPlayer {
  videoId = input.required<string>();
  private s = inject(DomSanitizer);
  url = computed(() => this.s.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId()}`));
}
