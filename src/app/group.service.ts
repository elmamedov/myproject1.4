import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Group } from './group';

@Injectable()
export class GroupService {

    private groupsUrl = 'api/groups';  

  constructor(private http: Http) { }

  getGroups(): Promise<Group[]> {
    return this.http.get(this.groupsUrl)
               .toPromise()
               .then(response => response.json().data as Group[])
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
getGroup(id: number): Promise<Group> {
  const url = `${this.groupsUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Group)
    .catch(this.handleError);
}

private headers = new Headers({'Content-Type': 'application/json'});
update(group: Group): Promise<Group> {
  const url = `${this.groupsUrl}/${group.id}`;
  return this.http
    .put(url, JSON.stringify(group), {headers: this.headers})
    .toPromise()
    .then(() => group)
    .catch(this.handleError);
}
private headers = new Headers({'Content-Type': 'application/json'});
update(group: Group): Promise<Group> {
  const url = `${this.groupsUrl}/${group.id}`;
  return this.http
    .put(url, JSON.stringify(group), {headers: this.headers})
    .toPromise()
    .then(() => group)
    .catch(this.handleError);
}
 create(number: string): Promise<Group> {
  return this.http
    .post(this.groupsUrl, JSON.stringify({number: number}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Group)
    .catch(this.handleError);
}
delete(id: number): Promise<void> {
  const url = `${this.groupsUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}



}
