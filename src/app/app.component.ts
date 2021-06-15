import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/service/user.service';
import { User } from './shared/model/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user = {} as User;
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

}