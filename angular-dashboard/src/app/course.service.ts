import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from './course';
import { COURSES } from './course-data';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  constructor(private messageService: MessageService) { }

  getCourses(): Observable<Course[]> {
    this.messageService.add('Course retrieved');
    return of(COURSES);
  }

}
