import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  courses: Course[];
  selectedCourse: Course;

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe((courses) => this.courses = courses);
  }

}
