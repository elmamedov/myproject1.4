import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { RouterModule } from "@angular/router";
import { AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import {CoursesComponent} from './courses/courses.component'
import {CourseService} from './course.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseSearchComponent } from './course-search/course-search.component'
import { CourseSearchService } from './course-search.service';
import { GroupsComponent } from './groups/groups.component'
import {GroupService} from './group.service';
import { GroupDetailComponent } from './group-detail/group-detail.component';






@NgModule({
  declarations: [
    AppComponent,
    CourseDetailComponent,
    CoursesComponent,
    DashboardComponent,
    CourseSearchComponent,
    GroupsComponent,
    GroupDetailComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  
   



  ],
 
  providers: [CourseService,CourseSearchService,GroupService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
