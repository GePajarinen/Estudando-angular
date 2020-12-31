import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../clientes.service';
import {FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html'
})
export class AdicionarClienteComponent {
  
  constructor(private clienteService: ClienteService) { }
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(''),
      documento: new FormControl(''),
      senha: new FormControl(''),
      email: new FormControl('')
    });

  }

  submit() {
    return this.clienteService.adicionarCliente(this.form);
  }

  


/*  constructor(private clienteService: ClienteService) { }
  public clientes: Cliente[] | undefined;
  public newCliente!: Cliente;

  adicionarCliente(newCliente: Cliente){
    this.clienteService
    .adicionarCliente(newCliente)
    .subscribe();
}

  ngOnInit() {
  }
  */

}
