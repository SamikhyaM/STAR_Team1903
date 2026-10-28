import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProgressService } from '../services/progress.service';
import { VideoPlayer } from '../components/video-player';

@Component({
  selector: 'app-lesson-detail',
  imports: [RouterLink, VideoPlayer],
  template: `
    <div class="container">
      @if (lesson) {
        <h1>{{ lesson.title }}</h1>
        <app-video-player [videoId]="lesson.videoId" />
        <p>
          <button class="btn" (click)="p.markComplete(lesson.id)">{{ p.isComplete(lesson.id) ? '✓ Completed' : 'Mark as complete' }}</button>
          <a class="btn primary" [routerLink]="['/quiz', lesson.quizId]">Take the practice test</a>
        </p>
      } @else { <p>Lesson not found. <a routerLink="/lessons">Back to lessons</a></p> }
    </div>`,
  styles: `p { display: flex; gap: .75rem; flex-wrap: wrap; }`,
})
export class LessonDetail {
  p = inject(ProgressService);
  lesson = this.p.getLesson(Number(inject(ActivatedRoute).snapshot.paramMap.get('id')));
}
