import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutoService } from './produtos/produtos.service';
import { VendaService } from './vendas/vendas.service';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { ListaVendaComponent } from './vendas/lista-venda/lista-venda.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaClienteComponent } from './clientes/lista-cliente/lista-cliente.component';
import { ClienteService } from './clientes/clientes.service';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
import { AdicionarClienteComponent } from './clientes/adicionar-cliente/adicionar-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    ListaVendaComponent,
    ListaClienteComponent,
    ProdutoDetalheComponent,
    AdicionarClienteComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    ProdutoService,
    VendaService,
    ClienteService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
