import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-produtor-lista',
  templateUrl: './produtor-lista.component.html',
  styleUrls: ['./produtor-lista.component.css']
})
export class ProdutorListaComponent implements OnInit {
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
