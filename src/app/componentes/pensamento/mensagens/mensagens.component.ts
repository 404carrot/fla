import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  @Input()pensamento={

conteudo:'teste',
autoria:'teste',
modelo:'modelo1'

  }
}
