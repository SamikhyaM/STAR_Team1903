import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProgressService } from '../services/progress.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
template: `
  <header>
    <a routerLink="/" class="brand">
      <img src="/star.GIF" alt="" class="brandStar">
      STAR Education
    </a>
    <nav>
      <a class ="navLink" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
      <a class ="navLink" routerLink="/lessons" routerLinkActive="active">Learn</a>
      <a class = "navLink" routerLink="/resources" routerLinkActive="active">Additional resources</a>
      @if (p.user(); as name) {
        <span class = "userName">Welcome, {{ name }}!</span>
        <button class="btn logOut" (click)="p.logout()">Log out</button>
      } @else {
        <a routerLink="/login" class="btn login">Sign up, it's free!</a>
      }
    </nav>
  </header>`,
  styles: `
    .userName{text-decoration: underline; text-decoration-color: var(--color-accent); text-decoration-style: wavy; color: var(--color-white);}
    .logOut {text-decoration: none; color: var(--color-white);}
    header { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; padding: .9rem 1.5rem; background: var(--color-navBackground); border-bottom: 1px solid #e3e8f0; }
    .brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-white);
}

.brandStar {
  width: 32px;
  height: 32px;
  object-fit: contain;
}
    nav { display: flex; align-items: center; gap: 1.25rem; }
    nav a:not(.btn) { text-decoration: none; color: var(--color-white); }
    .active { border-bottom: 3px solid var(--color-accent); }`,
  
})
export class Header { p = inject(ProgressService); }
