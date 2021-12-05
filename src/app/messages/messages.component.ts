import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  template: `
    <div *ngIf="messageService.messages.length">
      <h2>Messages</h2>
      <button class="clear"
              (click)="messageService.clear()">Clear messages</button>
      <div *ngFor='let message of messageService.messages'> {{message}} </div>
    </div>
  `,
  styles: [`
    
  `]
})
export class MessagesComponent implements OnInit {
  
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
  }
}
