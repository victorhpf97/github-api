import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/github/user.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {

  public listUsers: any = [];

  constructor(private serviceUser: UserService, private router: Router,) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  //Bring all users of api Github
  getAllUsers() {
    this.serviceUser.getAll().subscribe(users => {
      this.listUsers = users;
    });
  }

  selectUser(userName: any) {
    this.router.navigate(['/informacoes/usuario'], userName);
  }

}
