import { Injectable, signal } from '@angular/core';
import { LESSONS, QUIZZES } from '../data/lessons';

const load = <T>(key: string, fallback: T): T => {
  try { return JSON.parse(localStorage.getItem(key) ?? '') as T; } catch { return fallback; }
};

@Injectable({ providedIn: 'root' })
export class ProgressService {
  lessons = LESSONS;
  user = signal<string | null>(load<string | null>('user', null));
  completed = signal<number[]>(load<number[]>('completed', []));
  scores = signal<Record<string, number>>(load<Record<string, number>>('scores', {}));

  getLesson(id: number) { return this.lessons.find(l => l.id === id); }
  getQuiz(id: string) { return QUIZZES.find(q => q.id === id); }
  isComplete(id: number) { return this.completed().includes(id); }
  percent() { return this.lessons.length ? Math.round(this.completed().length / this.lessons.length * 100) : 0; }

  markComplete(id: number) {
    if (this.isComplete(id)) return;
    this.completed.update(l => [...l, id]);
    localStorage.setItem('completed', JSON.stringify(this.completed()));
  }
  saveScore(quizId: string, score: number) {
    const best = Math.max(score, this.scores()[quizId] ?? 0);
    this.scores.update(s => ({ ...s, [quizId]: best }));
    localStorage.setItem('scores', JSON.stringify(this.scores()));
  }
  login(name: string) { this.user.set(name); localStorage.setItem('user', JSON.stringify(name)); }
  logout() { this.user.set(null); localStorage.removeItem('user'); }
}
