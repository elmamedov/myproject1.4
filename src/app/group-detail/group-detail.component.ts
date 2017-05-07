import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../group';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { GroupService } from '../group.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

 @Input()
  group: Group;

  constructor(
  private groupService: GroupService,
  private route: ActivatedRoute,
  private location: Location
) {}

  ngOnInit(): void {
  this.route.params
      .switchMap((params: Params) => 
  this.groupService.getGroup(+params['id']))
      .subscribe(group => this.group = group);
}
goBack(): void {
  this.location.back();
}

save(): void {
  this.groupService.update(this.group)
    .then(() => this.goBack());
}

}


