import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

 mural = [
{
  conteudo:'hello',
  autoria:'world',
  modelo:'modelo1'
},
{
  conteudo:'segundo teste',
  autoria:'teste 2',
  modelo:'modelo3'
}
  
];

  constructor() { }

  ngOnInit(): void {
  }

}
