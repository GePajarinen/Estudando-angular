
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class UsersService{

constructor(private http: HttpClient) {}

    protected UrlServiceV1: string = "https://jsonplaceholder.typicode.com/users";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    listarUsers() : Observable<User[]> {
        return this.http
        .get<User[]>(this.UrlServiceV1);
    }

    
}