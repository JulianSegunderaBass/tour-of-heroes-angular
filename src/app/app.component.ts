import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-heroes></app-heroes>
    <app-messages></app-messages>
  `,
  styles: [`
  
  `]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
