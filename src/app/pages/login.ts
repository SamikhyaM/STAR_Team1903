import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressService } from '../services/progress.service';

// basic login design, no backend yet
@Component({
  selector: 'app-login',
  template: `
    <div class="container narrow">
      <h1>Create your free account</h1>
      <label for="n">Your name</label>
      <input id="n" #n (keyup.enter)="go(n.value)" />
      <button class="btn primary" (click)="go(n.value)">Get started</button>
    </div>`,
  styles: `.narrow { max-width: 420px; } input { display: block; width: 100%; padding: .7rem; margin: .5rem 0 1rem; font: inherit; border: 2px solid #d3dbe8; border-radius: var(--radius); }`,
})
export class Login {
  private p = inject(ProgressService); private r = inject(Router);
  go(name: string) { if (name.trim()) { this.p.login(name.trim()); this.r.navigate(['/lessons']); } }
}
