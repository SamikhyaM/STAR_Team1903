import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressService } from '../services/progress.service';
import { ProgressBar } from '../components/progress-bar';
import { RoadmapItem } from '../components/roadmap-item';

@Component({
  selector: 'app-roadmap',
  imports: [RouterLink, ProgressBar],
  template: `
    <div class="container">
      <h1>Your Roadmap</h1>
      <app-progress-bar [percent]="p.percent()" />

      <ol class="road">
        @for (item of items(); track item.link) {
          <li [class]="'step ' + item.status.replace(' ', '-')">
            <span class="marker">
              @switch (item.status) {
                @case ('completed') { ✓ }
                @case ('in-progress') { ► }
                @default { {{ $index + 1 }} }
              }
            </span>
            <div class="card">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <a class="btn" [class.primary]="item.status === 'in-progress'" [routerLink]="item.link">
                {{ item.status === 'completed' ? 'Review' : item.status === 'in-progress' ? 'Continue' : 'Start' }}
              </a>
            </div>
          </li>
        }
      </ol>
    </div>`,
  styles: `
    .road { list-style: none; padding: 0; margin: 1.5rem 0 0; border-left: 3px solid #dde4ef; }
    .step { position: relative; padding: 0 0 1.25rem 2.5rem; }
    .marker { position: absolute; left: -1.05rem; top: 0.5rem; width: 2rem; height: 2rem; border-radius: 50%;
      display: grid; place-items: center; font-weight: 700; background: #dde4ef; color: #667; }
    .completed .marker { background: #2e9e5b; color: #fff; }
    .in-progress .marker { background: var(--color-primary); color: #fff; }
    .not-started { opacity: .7; }
  `,
})
export class Roadmap {
  p = inject(ProgressService);

  items = computed<RoadmapItem[]>(() => {
    const done = this.p.completed();
    const nextId = this.p.lessons.find(l => !done.includes(l.id))?.id;
    return this.p.lessons.map(l => ({
      title: l.title,
      description: l.summary,
      link: `/lessons/${l.id}`,
      status: done.includes(l.id) ? 'completed' : l.id === nextId ? 'in-progress' : 'not started',
    }));
  });
}