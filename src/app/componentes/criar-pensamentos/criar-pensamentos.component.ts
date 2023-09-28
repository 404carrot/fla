import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

 pensamento ={
id: '1',
conteudo:'texto generico',
autoria:'texto generico',
modelo:'modelo1'


}
  constructor() { }

  ngOnInit(): void {
  }

  salvar(){

alert("salvo")

  }

limpar(){

this.pensamento.conteudo = "";
this.pensamento.autoria='';
this.pensamento.modelo='';


}


}
