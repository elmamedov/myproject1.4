import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { CourseSearchService } from '../course-search.service';
import { Course } from '../course';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {

  courses: Observable<Course[]>;

  private searchTerms = new Subject<string>();

  constructor(

    private courseSearchService: CourseSearchService,
    private router: Router) {}
  
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.courses = this.searchTerms
      .debounceTime(300)        
      .distinctUntilChanged()   
      .switchMap(term => term  
        ? this.courseSearchService.search(term)
        
        : Observable.of<Course[]>([]))
      .catch(error => {
        
        console.log(error);
        return Observable.of<Course[]>([]);
      });
  }
  gotoDetail(course: Course): void {
    let link = ['/detail', course.id];
    this.router.navigate(link);
  }

}
