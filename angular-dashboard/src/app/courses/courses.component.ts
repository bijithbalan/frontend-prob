import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  courses: Course[];

  getCourses(): void {
    this.courseService.getCourses().subscribe((courses) => this.courses = courses);
  }

}
