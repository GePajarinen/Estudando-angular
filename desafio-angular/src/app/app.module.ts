import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatTabsModule}  from '@angular/material/tabs';
import { MenuComponent } from './menu/menu.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { PhotosService } from './photos/photos.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersService } from './users/users.service';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    UsersComponent,
    PhotosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    NgxPaginationModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule
    
  ],
 
  providers: [
    PhotosService,
    UsersService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
