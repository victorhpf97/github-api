import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/github/users.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

  public repository: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceUsers: UsersService,
  ) { }

  ngOnInit(): void {
    const userName = this.route.snapshot.params.username;
    this.validParameters(userName);
  }

  validParameters(userName: string) {
    if (userName) {
      this.loadUserByName(userName);
      this.loadUserRepository(userName);
      // this.loadUserFollowers(userName);
    }
    else {
      this.router.navigate(['/pesquisa']);
    }
  }

  loadUserByName(userName: string) {
    this.serviceUsers.getByName(userName).subscribe((user: any) => {
      // this.user = user
    }, err => {
      this.router.navigate(['error/', err.status]);
    });
  }

  loadUserRepository(userName: string) {
    this.serviceUsers.getRepository(userName).subscribe(repository => {
      this.repository = this.orderRepositoryByStars(repository);
    });
  }

  orderRepositoryByStars(repository: any) {
    return repository.sort((a: any, b: any) => { return b.stargazers_count - a.stargazers_count });
  }

}
