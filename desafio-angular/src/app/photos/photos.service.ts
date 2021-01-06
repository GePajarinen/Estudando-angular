import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './photo';



@Injectable()
export class PhotosService{

    constructor(private http: HttpClient) {}

    protected UrlService: string = "https://jsonplaceholder.typicode.com/"
   // protected UrlService: string = "http://localhost:3000/";

    listarPhotos() : Observable<Photo[]> {
        return this.http
        .get<Photo[]>(this.UrlService + "photos");
    } 
}