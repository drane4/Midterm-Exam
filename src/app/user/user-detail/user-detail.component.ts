import { Component, Input } from '@angular/core';

import { UserService } from '../User.service';

import { User } from '../User-model';

@Component({
  selector: 'User-detail',
  templateUrl: './User-detail.component.html',
  styleUrls: ['./User-detail.component.scss'],
})
export class UserDetailComponent {

  @Input()
  User: User;

  constructor(private UserService: UserService) { }

  addHeartToUser(val: number) {
    if (this.User.id) {
      this.UserService.updateuser(this.User.id, { hearts: val + 1 });
    } else {
      console.error('User missing ID!');
    }
  }

  deleteUser(id: string) {
    this.UserService.deleteuser(id);
  }

}
