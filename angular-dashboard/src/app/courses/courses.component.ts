import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

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
