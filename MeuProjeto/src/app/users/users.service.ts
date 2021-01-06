
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class UsersService{

constructor(private http: HttpClient) {}

    protected UrlService: string = "https://jsonplaceholder.typicode.com/";
    //protected UrlService: string = "http://localhost:3000/users"
   
    listarUsers() : Observable<User[]> {
        return this.http
        .get<User[]>(this.UrlService + "users");
    }

    getUsers() {
        return this.http
        .get(this.UrlService + "users");
    }

    
}