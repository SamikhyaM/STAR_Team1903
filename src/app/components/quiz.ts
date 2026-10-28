import { Component, computed, input, output, signal } from '@angular/core';
import { Quiz as QuizData } from '../data/lessons';

@Component({
  selector: 'app-quiz',
  template: `
    @if (!done()) {
      <p>Question {{ index() + 1 }} of {{ quiz().questions.length }}</p>
      <h2>{{ question().text }}</h2>
      @for (opt of question().options; track $index) {
        <button class="option"
          [class.correct]="answered() && $index === question().answerIndex"
          [class.wrong]="answered() && $index === selected() && $index !== question().answerIndex"
          (click)="choose($index)">{{ opt }}</button>
      }
      @if (answered()) {
        @if (question().explanation) { <p>{{ question().explanation }}</p> }
        <button class="btn primary" (click)="next()">{{ last() ? 'See score' : 'Next' }}</button>
      }
    } @else {
      <h2>You scored {{ score() }} / {{ quiz().questions.length }}</h2>
      <button class="btn primary" (click)="restart()">Try again</button>
    }`,
  styles: `.option { display: block; width: 100%; margin: .5rem 0; padding: .8rem; text-align: left; font: inherit; background: var(--color-surface); border: 2px solid #d3dbe8; border-radius: var(--radius); cursor: pointer; }
    .correct { background: var(--color-good); border-color: green; } .wrong { background: var(--color-bad); border-color: red; }`,
})
export class Quiz {
  quiz = input.required<QuizData>();
  finished = output<number>();
  index = signal(0); selected = signal<number | null>(null); score = signal(0); done = signal(false);
  question = computed(() => this.quiz().questions[this.index()]);
  answered = computed(() => this.selected() !== null);
  last = computed(() => this.index() + 1 >= this.quiz().questions.length);

  choose(i: number) {
    if (this.answered()) return;
    this.selected.set(i);
    if (i === this.question().answerIndex) this.score.update(s => s + 1);
  }
  next() {
    if (this.last()) { this.done.set(true); this.finished.emit(this.score()); }
    else { this.index.update(i => i + 1); this.selected.set(null); }
  }
  restart() { this.index.set(0); this.selected.set(null); this.score.set(0); this.done.set(false); }
}
