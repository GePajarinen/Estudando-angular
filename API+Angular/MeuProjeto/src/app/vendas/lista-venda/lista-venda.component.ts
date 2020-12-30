import { Component, OnInit } from '@angular/core';
import { VendaService } from '../vendas.service';
import { Venda } from '../venda';

@Component({
  selector: 'app-lista-venda',
  templateUrl: './lista-venda.component.html'
})
export class ListaVendaComponent implements OnInit {

  constructor(private vendaService: VendaService) { }

  public vendas: Venda[] | undefined;

  ngOnInit() {
    this.vendaService.listarVendas()
    .subscribe(
      vendas => {
        this.vendas = vendas;
        console.log(vendas);
      },
      error => console.log(error)
    );
  }

}

