import { Component, OnInit } from '@angular/core';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { Course } from '../course';
import {CourseService} from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [],
})
export class CoursesComponent implements OnInit {

  courses: Course[];

  selectedCourse: Course;

  constructor(
    private router: Router,
    private courseService: CourseService) { }

  getCourses(): void {
    this.courseService.getCourses().then(courses => this.courses = courses);
  }

  ngOnInit(): void {
    this.getCourses();
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCourse.id]);
  }

  add(name: string): void {
  name = name.trim();
  
  if (!name) { return; }
  this.courseService.create(name)
    .then(course => {
      this.courses.push(course);
      this.selectedCourse = null;
    });
  }


    delete(course: Course): void {
  this.courseService
      .delete(course.id)
      .then(() => {
        this.courses = this.courses.filter(c => c !== course);
        if (this.selectedCourse === course) { this.selectedCourse = null; }
      });

    }

}


