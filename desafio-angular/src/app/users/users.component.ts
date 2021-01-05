import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{

  constructor(private userServise: UsersService) {}
  public users: User[] | undefined;
  
  ngOnInit() {
    this.userServise.listarUsers()
      .subscribe(
        users => {
          this.users = users;
          console.log(users);
        },
        error => console.log(error)
      );
  }
  
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website' ];
  dataSource = this.users;
  
}



