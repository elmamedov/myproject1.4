import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import {GroupService} from '../group.service';
import { Router } from '@angular/router';
import { GroupDetailComponent } from '../group-detail/group-detail.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: Group[];

  selectedGroup: Group;

  constructor(
    private router: Router,
    private groupService: GroupService) { }

  getGroups(): void {
    this.groupService.getGroups().then(groups => this.groups = groups);
  }

  ngOnInit(): void {
    this.getGroups();
  }

  onSelect(group: Group): void {
    this.selectedGroup = group;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedGroup.id]);
  }
  add(number: string): void {
  number = number.trim();
  if (!number) { return; }
  this.groupService.create(number)
    .then(group => {
      this.groups.push(group);
      this.selectedGroup = null;
    });
  }

    delete(group: Group): void {
  this.groupService
      .delete(group.id)
      .then(() => {
        this.groups = this.groups.filter(g => g !== group);
        if (this.selectedGroup === group) { this.selectedGroup = null; }
      });

    }
}
