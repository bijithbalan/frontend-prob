import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Course } from '../course';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() course: Course;
  messages: string[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messages = this.messageService.get();
  }

  clear() {
    this.messageService.clear();
    this.messages = [];
  }

}
