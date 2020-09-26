import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';
import { Course } from '../course';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void { }

  @Input() course: Course;

}
