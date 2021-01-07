import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalUserComponent } from './modal-user/modal-user.component';
import { Address } from './address';
import { Company } from './company';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  displayedColumns: string[] = ['name', 'username', 'email', '+'];
  dataSource = new MatTableDataSource<User>();
  user = {} as User;
  address = {} as Address;
  company = {} as Company;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private userServise: UsersService, 
    public dialog: MatDialog) { }

  ngOnInit() {
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
  
  openDialog(user: User) {
    
    this.dialog.open(ModalUserComponent, {
      data: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        
      }
    });
  }

}
