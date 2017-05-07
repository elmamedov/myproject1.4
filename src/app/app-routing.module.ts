import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CoursesComponent }      from './courses/courses.component';
import { CourseDetailComponent }  from './course-detail/course-detail.component';
import { GroupsComponent }  from './groups/groups.component';
import { GroupDetailComponent }  from './group-detail/group-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: CourseDetailComponent },
  { path: 'courses',     component: CoursesComponent },
  { path: 'groups',     component: GroupsComponent },
  { path: 'detail/:id', component: GroupDetailComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting {
}
