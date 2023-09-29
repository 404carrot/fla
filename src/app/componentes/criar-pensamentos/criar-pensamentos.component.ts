import { Component, Input, OnInit } from '@angular/core';
import { Mural } from '../pensamentos/interface';
import { ServicesService } from '../pensamento/services.service';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

 pensamento: Mural ={

conteudo:'',
autoria:'',
modelo:'modelo1'


}
  constructor(private service:ServicesService
    
    
    
    ) { }

  ngOnInit(): void {
  }





  
  salvar(){

this.service.cadastrar(this.pensamento).subscribe()

  }

limpar(){

this.pensamento.conteudo = "";
this.pensamento.autoria='';
this.pensamento.modelo='';


}


}
