import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  ArrayDeImg = [];
  ArrayDeTitulo = [];

  salvarImg(img){
    this.ArrayDeImg.push(img);
    img = '';

  }
  salvarTitulo(titulo){
    this.ArrayDeTitulo.push(titulo);
    titulo = '';

  }
}
