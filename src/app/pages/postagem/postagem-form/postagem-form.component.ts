import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-postagem-form',
  templateUrl: './postagem-form.component.html',
  styleUrls: ['./postagem-form.component.css']
})
export class PostagemFormComponent implements OnInit {

  botaoClicado(){
    alert('efetuado!!!');
  }

  constructor(private angularFire: AngularFireDatabase,
  
  ) { }

  ngOnInit() {
  }


  form_submit(f: NgForm) {
    this.angularFire.list("Postagems").push(
      {
        img: f.controls.img.value,
        titulo: f.controls.titulo.value,
        descricao: f.controls.descricao.value,
        horario: f.controls.horario.value,
        local: f.controls.local.value
        
      }
    ).then((t: any) => console.log(this.botaoClicado + t.key)),
      (e: any) => console.log(e.message);

    f.controls.img.setValue('');
    f.controls.titulo.setValue('');
    f.controls.descricao.setValue('');
    f.controls.horario.setValue('');
    f.controls.local.setValue('');

    
    
  }

}
