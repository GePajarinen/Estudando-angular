
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Venda } from './venda';

@Injectable()
export class VendaService{

constructor(private http: HttpClient) {}

    //protected UrlServiceV1: string = "http://localhost:3000/";
    protected UrlServiceV1: string = "http://localhost:8080/api/";

    listarVendas() : Observable<Venda[]> {
        return this.http
        .get<Venda[]>(this.UrlServiceV1 +  "vendas");
    }

}