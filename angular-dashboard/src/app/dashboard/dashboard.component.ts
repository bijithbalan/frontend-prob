import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private CourseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  courses: Course[];
  selectedCourse: Course;

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

  getCourses(): void {
    this.CourseService.getCourses().subscribe((courses) => this.courses = courses);
  }

}
