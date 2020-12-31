import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../clientes.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html'
})
export class ListaClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }
  
  public clientes: Cliente[] | undefined;
  public cliente!: Cliente;
 
 /*
  adicionar(){
    this.clienteService.adicionarCliente().subscribe();
  }
  */
  
  remove(id: string) {
   this.clienteService.remove(id).subscribe();
  }
  

  ngOnInit(){
    
    this.clienteService.listarClientes()
      .subscribe(
        clientes => {
          this.clientes = clientes;
          console.log(clientes);
        },
        error => console.log(error)
      );

     /* this.clienteService
        .remove(this.cliente.id)
        .subscribe();*/

    /*this.clienteService.remove(this.cliente.id) 
      { console.log('this would have removed', this.cliente.id);
      }*/
  
  }

  

}

