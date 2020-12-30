
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from './cliente';
import { Observable } from 'rxjs';

@Injectable()
export class ClienteService{

constructor(private http: HttpClient) {}

    //protected UrlServiceV1: string = "http://localhost:3000/";
    protected UrlServiceV1: string = "http://localhost:8080/api/";

    listarClientes() : Observable<Cliente[]> {
        return this.http
        .get<Cliente[]>(this.UrlServiceV1 +  "clientes");
    }

}