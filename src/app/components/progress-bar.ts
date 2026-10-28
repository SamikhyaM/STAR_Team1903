import { Component, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `<div class="track"><div class="fill" [style.width.%]="percent()"></div></div><small>{{ percent() }}% complete</small>`,
  styles: `.track { height: 12px; background: #dde4ef; border-radius: 99px; overflow: hidden; }
    .fill { height: 100%; background: var(--color-primary); transition: width .3s; }`,
})
export class ProgressBar { percent = input.required<number>(); }
