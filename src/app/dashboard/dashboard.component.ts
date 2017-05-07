import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {

    this.courseService.getCourses()
    
      .then(courses => this.courses = courses.slice(1, 5));
  }

}
