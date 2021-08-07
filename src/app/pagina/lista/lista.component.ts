import { Component, OnInit } from '@angular/core';
import { Produto} from './../../produto'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

p1 = new Produto('Arraial do cabo', 'bruno@viagens.com', 2000.00, 0.30,'Sem data devinida');
  constructor() { }

  ngOnInit(): void {
  }

}
