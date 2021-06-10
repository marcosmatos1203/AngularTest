import { Component, OnInit } from '@angular/core';
import { Produtor } from 'src/app/shared/model/produtor.model';
import { ProdutorService } from 'src/app/shared/service/produtor.service';

@Component({
  selector: 'app-produtor-lista',
  templateUrl: './produtor-lista.component.html',
  styleUrls: ['./produtor-lista.component.css']
})
export class ProdutorListaComponent implements OnInit {

  listaDeProdutores: Produtor[] = [];

  constructor(
    public pService:ProdutorService
  ) { }

  ngOnInit(): void {
    this.buscaProdutor();
  }
  buscaProdutor(){
  
    this.pService.getProdutorWithFlag('nomeProdutor').subscribe(data =>{
      this.listaDeProdutores = data.content;
      console.log(this.listaDeProdutores);
    });
  }

}
