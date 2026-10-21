import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` Test Text: {{ username }} `,
})
export class User {
  username = 'text';
}

@Component({
  selector: 'app-root',
  template: `<section><app-user /></section>
    @if (testBoolean){
      <p> boolean is true </p>
    } @else {
      <p> boolean is false </p>
    }
    @for (os of operatingSystems; track os.id) {
      {{ os.name }}
    }
    
    @for (user of users; track user.id) {
      <p>{{ user.name }}</p>
    }
  `,
  imports: [User],
})

export class App {
  testBoolean = true;
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'macOS'}, {id: 'linux', name: 'Linux'}];
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
}
