import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';
import { DataSource } from '@angular/cdk/collections';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit   {
  users!: User[];
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website' ];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private userServise: UsersService) {
    
  }

  ngOnInit() : void{
   this.getLista();
  }

  getLista(): void {
    this.userServise.listarUsers().subscribe(
      (data : any) => {
        this.dataSource = new MatTableDataSource<User>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
  

  
  
  
  
}



/*
export class UsersComponent implements OnInit{

  constructor(private userServise: UsersService) {}
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website' ];
  
  public users: User[] | undefined;
  dataSource = this.users;


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
}*/
  
  
  
  




