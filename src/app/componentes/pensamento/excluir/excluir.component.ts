import { Component, OnInit } from '@angular/core';
import { Mural } from '../../pensamentos/interface';
import { ServicesService } from '../services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

mural : Mural={

id: 0,
conteudo: '',
autoria:'',
modelo:''

}

  constructor( private service: ServicesService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
const id = this.route.snapshot.paramMap.get('id')
this.service.buscaId(parseInt(id!)).subscribe((mural)=>{

this.mural= mural;

})

  }

excluir(){

  if(this.mural.id){

    this.service.excluir(this.mural.id).subscribe(()=>{

      this.router.navigate(['/mural']);
      
      
      })
  }

}

cancelar(){

  this.router.navigate(['/mural']);

}

}
