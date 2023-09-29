import { Component, Input, OnInit } from '@angular/core';
import { Mural } from '../../pensamentos/interface';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  @Input()pensamento: Mural={
 id: 0,
conteudo:'teste',
autoria:'teste',
modelo:'modelo1'

  }

largura(): String {
if(this.pensamento.conteudo.length>=256){

return'pensamento-g'

}
return 'pensamento-p'


}


}
