import { Component, inject } from '@angular/core';
import { ProgressService } from '../services/progress.service';
import { LessonCard } from '../components/lesson-card';

@Component({
  selector: 'app-lessons',
  imports: [LessonCard],
  template: `
    <div class="container">
      <h1>Lessons</h1>
      <div class="cards">
        @for (l of p.lessons; track l.id) { <app-lesson-card [lesson]="l" [done]="p.isComplete(l.id)" /> }
      </div>
    </div>`,
})
export class Lessons { p = inject(ProgressService); }
