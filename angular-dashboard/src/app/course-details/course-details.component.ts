import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: Course;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.course = window.history.state.course;
    this.messageService.add(this.course.name + " page visited.");
  }

}
