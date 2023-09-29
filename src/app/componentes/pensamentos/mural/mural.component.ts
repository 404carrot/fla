import { Component, OnInit } from '@angular/core';
import { Mural } from '../interface';
import { ServicesService } from '../../pensamento/services.service';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

 mural:Mural[] = [


  
];

  constructor(private service: ServicesService) { }

  ngOnInit(): void {

this.service.listar().subscribe((mural) =>{


this.mural = mural


})

  }


}
