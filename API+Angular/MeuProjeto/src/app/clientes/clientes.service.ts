
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from './cliente';
import { Observable } from 'rxjs';

@Injectable()
export class ClienteService{

constructor(private http: HttpClient) {}

    //protected UrlServiceV1: string = "http://localhost:3000/";
    protected UrlServiceV1: string = "http://localhost:8080/api/";
    protected UrlServiceV2: string = "http://localhost:8080/api/clientes";


    listarClientes() : Observable<Cliente[]> {
        return this.http
        .get<Cliente[]>(this.UrlServiceV1 +  "clientes");
    }

    /** DELETE: delete the cliente from the server */
    /*remove(id: string) {
        return this.http.delete(this.UrlServiceV2 + '/' + id);
    }*/

    remove(id: string): Observable<{}> {
        const url = `${this.UrlServiceV2}/${id}`; // DELETE api/clientes/2
        return this.http.delete(url);
    }

    /**POST:  Adicionar cliente */
    adicionarCliente(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(this.UrlServiceV2, cliente);
  }


  

}