import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {

  public contadorClique: number = 0;
  public urlImagem: string = "/assets/multiplataforma2.jpg"
  public nome: string = "";

  adicionarClique(){
    this.contadorClique ++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  /*
  soltaTecla(event: any){
    this.nome = event.target.value;
  }
  */
}


