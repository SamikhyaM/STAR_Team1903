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
      <h1>You have <mark>potential</mark>.<br />We'll help you reach it.</h1>
      <p>Free lessons and practice tests to help you earn your high school equivalency.</p>
      <button class="homeStart" routerLink="/lessons">Start learning now</button>
    </div>
  </section>

  <div class="container">
    <h2>Everything you need in one place</h2>

    <div class="cards prettierCards">
      @for (f of features; track f.title) {
        <div class="card">
          <div class="feature-icon">
            @switch (f.icon) {
              @case ('book-open') {
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 7v14" />
                  <path d="M3 18V5a2 2 0 0 1 2-2h4a3 3 0 0 1 3 3v15a3 3 0 0 0-3-3H5a2 2 0 0 0-2 2Z" />
                  <path d="M21 18V5a2 2 0 0 0-2-2h-4a3 3 0 0 0-3 3v15a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2Z" />
                </svg>
              }
              @case ('clipboard-check') {
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="5" y="4" width="14" height="18" rx="2" />
                  <path d="M9 4V3h6v1" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
              }
              @case ('chart-no-axes-combined') {
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="m7 14 4-4 4 3 6-7" />
                </svg>
              }
            }
          </div>

          <h3>{{ f.title }}</h3>
          <p>{{ f.text }}</p>
        </div>
      }
    </div>

    <h2>Your progress</h2>
    <app-progress-bar [percent]="p.percent()" />
  </div>
`,
styles: `
  .hero {
    background: linear-gradient(120deg, #e8f0fb, #f7f9fc);
  }
  mark {
  background: linear-gradient(#f8e489, #f8e489) no-repeat;
  background-size: 0% 75%;
  background-position: left 85%;
  color: #000;
  padding: 0 4px;
  animation: highlight .6s ease-out 0.5s forwards;
  }

@keyframes highlight {
  from {
    background-size: 0% 75%;
  }
  to {
    background-size: 100% 75%;
  }
}

  .hero h1 {
    font-size: 2.6rem;
    margin-top: 1rem;
  }

  .hero .container {
    padding: 3rem 1rem;
  }

  .feature-icon {
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    color: #3975b9;
    border-radius: 14px;
    margin-bottom: 1rem;
  }

  .feature-icon svg {
    width: 27px;
    height: 27px;
  }
`,
})

export class Home {
  p = inject(ProgressService);

  features = [
    {
      title: 'Online lessons',
      text: 'Learn at your own pace with easy-to-follow video lessons that break down important concepts into simple, manageable steps.',
      icon: 'book-open'
    },
    {
      title: 'Practice tests',
      text: 'Put your knowledge to the test with interactive quizzes. Review answer explanations to understand mistakes and strengthen your skills.',
      icon: 'clipboard-check'
    },
    {
      title: 'Track progress',
      text: 'Keep track of completed lessons, quiz results, and learning milestones so you can see how far you have come.',
      icon: 'chart-no-axes-combined'
    },
  ];
}
