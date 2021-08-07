import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppAngular';
  nome = '';
  vetor = ['cadeira', 'mesa', 'teclado'];
  
  add(){
    let n = this.nome;
    this.vetor.push(n);
    this.nome = '';

  }

  remover(x: number){
    this.vetor.splice(x, 1)
  }

}



