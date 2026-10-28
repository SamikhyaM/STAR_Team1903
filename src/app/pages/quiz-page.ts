import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProgressService } from '../services/progress.service';
import { Quiz } from '../components/quiz';

@Component({
  selector: 'app-quiz-page',
  imports: [Quiz, RouterLink],
  template: `
    <div class="container">
      @if (quiz) {
        <h1>{{ quiz.title }}</h1>
        <app-quiz [quiz]="quiz" (finished)="p.saveScore(quiz.id, $event)" />
        @if (p.scores()[quiz.id] !== undefined) { <p>Best score: {{ p.scores()[quiz.id] }} / {{ quiz.questions.length }}</p> }
      } @else { <p>Quiz not found.</p> }
      <a routerLink="/lessons">Back to lessons</a>
    </div>`,
})
export class QuizPage {
  p = inject(ProgressService);
  quiz = this.p.getQuiz(inject(ActivatedRoute).snapshot.paramMap.get('id') ?? '');
}
