import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero.interface';

@Component({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name | uppercase}} Details</h2>
      <div><span>id: </span>{{hero.id}}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `,
  styles: [`
    
  `]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  
  constructor() {}

  ngOnInit(): void {
  }
}
