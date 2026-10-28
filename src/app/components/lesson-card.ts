import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lesson } from '../data/lessons';

@Component({
  selector: 'app-lesson-card',
  imports: [RouterLink],
  template: `
    <div class="card">
      <small>{{ lesson().subject }}</small>
      <h3>{{ lesson().title }} @if (done()) { <span title="Completed">✓</span> }</h3>
      <p>{{ lesson().summary }}</p>
      <a class="btn primary" [routerLink]="['/lessons', lesson().id]">Start lesson</a>
    </div>`,
})
export class LessonCard { lesson = input.required<Lesson>(); done = input(false); }
