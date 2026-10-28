import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { Lessons } from './pages/lessons';
import { LessonDetail } from './pages/lesson-detail';
import { QuizPage } from './pages/quiz-page';
import { Login } from './pages/login';
import { Roadmap } from './pages/roadmap';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'lessons', component: Lessons },
  { path: 'lessons/:id', component: LessonDetail },
  { path: 'quiz/:id', component: QuizPage },
  { path: 'login', component: Login },
  { path: 'roadmap', component: Roadmap },
  { path: '**', redirectTo: '' },
  
];
