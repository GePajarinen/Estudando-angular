import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatTabsModule} from '@angular/material/tabs';
import { MenuComponent } from './menu/menu.component';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { PhotosService } from './photos/photos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    UsersComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [
    PhotosService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
