import { Component, OnInit } from '@angular/core';

import { UserService } from '../User.service';

import { User } from '../User-model';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  Users: Observable<User[]>;
  content: string;

  constructor(private UserService: UserService) { }

  ngOnInit() {
    // this.Users = this.UserService.getData()
    this.Users = this.UserService.getSnapshot();
  }

  createUser() {
    this.UserService.create(this.content);
    this.content = '';
  }

}
