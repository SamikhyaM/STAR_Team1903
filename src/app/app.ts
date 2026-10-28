import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header';
import { Footer } from './components/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  template: `<app-header /><main><router-outlet /></main><app-footer />`,
  styles: `main { min-height: 70vh; }`,
})
export class App {}
