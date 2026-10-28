import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProgressService } from '../services/progress.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header>
      <a routerLink="/" class="brand">STAR Education</a>
      <nav>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        <a routerLink="/lessons" routerLinkActive="active">Learn</a>
        @if (p.user(); as name) {
          <span>Hi, {{ name }}</span>
          <button class="btn" (click)="p.logout()">Log out</button>
        } @else {
          <a routerLink="/login" class="btn primary">Sign up, it's free!</a>
        }
      </nav>
    </header>`,
  styles: `
    header { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; padding: .9rem 1.5rem; background: var(--color-surface); border-bottom: 1px solid #e3e8f0; }
    .brand { font-family: var(--font-heading); font-size: 1.4rem; font-weight: 700; text-decoration: none; color: var(--color-primary-dark); }
    nav { display: flex; align-items: center; gap: 1.25rem; }
    nav a:not(.btn) { text-decoration: none; color: var(--color-text); }
    .active { border-bottom: 3px solid var(--color-primary); }`,
})
export class Header { p = inject(ProgressService); }
