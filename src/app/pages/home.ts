import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressService } from '../services/progress.service';
import { ProgressBar } from '../components/progress-bar';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProgressBar],
  template: `
    <section class="hero">
      <div class="container">
        <h1>You have potential.<br />We'll help you reach it.</h1>
        <p>Free lessons and practice tests to help you earn your high school equivalency.</p>
        <a class="btn primary" routerLink="/lessons">Start learning now</a>
      </div>
    </section>
    <div class="container">
      <h2>Everything you need in one place</h2>
      <div class="cards">
        @for (f of features; track f.title) {
          <div class="card"><h3>{{ f.title }}</h3><p>{{ f.text }}</p></div>
        }
      </div>
      <h2>Your progress</h2>
      <app-progress-bar [percent]="p.percent()" />
    </div>`,
  styles: `.hero { background: linear-gradient(120deg, #e8f0fb, #f7f9fc); } .hero h1 { font-size: 2.6rem; margin-top: 1rem; } .hero .container { padding: 3rem 1rem; }`,
})
export class Home {
  p = inject(ProgressService);
  features = [
    { title: 'Online lessons', text: 'Easy-to-follow video lessons.' },
    { title: 'Practice tests', text: 'Check what you know and see explanations.' },
    { title: 'Track progress', text: 'See how far you have come.' },
  ];
}
