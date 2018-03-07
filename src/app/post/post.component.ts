import { formulario } from './../formulario';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  imgs= []; 
  task: formulario = {
    img: "",
    titulo: "",
    descricao: "",
    local: "",
    horario: ""
  };

  add(){
    let task = Object.assign({},this.task)
    this.imgs.push(task);

  }

  constructor() { }

  ngOnInit() {
  }

}
