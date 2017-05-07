import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { CourseService } from '../course.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
 
})

export class CourseDetailComponent implements OnInit {

 @Input()
  course: Course;

  constructor(
  private courseService: CourseService,
  private route: ActivatedRoute,
  private location: Location
) {}

  ngOnInit(): void {
  this.route.params
      .switchMap((params: Params) => 
  this.courseService.getCourse(+params['id']))
      .subscribe(course => this.course = course);
}
goBack(): void {
  this.location.back();
}

save(): void {
  this.courseService.update(this.course)
    .then(() => this.goBack());
}

}
