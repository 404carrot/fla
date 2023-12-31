import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodaPeComponent } from './componentes/roda-pe/roda-pe.component';
import { CriarPensamentosComponent } from './componentes/criar-pensamentos/criar-pensamentos.component';
import { FormsModule } from '@angular/forms';
import { MuralComponent } from './componentes/pensamentos/mural/mural.component';
import { MensagensComponent } from './componentes/pensamento/mensagens/mensagens.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirComponent } from './componentes/pensamento/excluir/excluir.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodaPeComponent,
    CriarPensamentosComponent,
    MuralComponent,
    MensagensComponent,
    ExcluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
