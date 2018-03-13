import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-cadastro-pessoa-form',
  templateUrl: './cadastro-pessoa-form.component.html',
  styleUrls: ['./cadastro-pessoa-form.component.css']
})
export class CadastroPessoaFormComponent implements OnInit {

  botaoClicado(){
    alert('Cadastro efetuado!!!');
  }

  constructor(
    private angularFire: AngularFireDatabase,
    
  ) { }

  ngOnInit() {}

  form_submit(f: NgForm) {
    this.angularFire.list("UsuariosCadastrado").push(
      {
        nome: f.controls.nome.value,
        sobrenome: f.controls.sobrenome.value,
        email: f.controls.email.value,
        senha: f.controls.senha.value,
        cidade: f.controls.cidade.value
        
      }
    ).then((t: any) => console.log(this.botaoClicado + t.key)),
      (e: any) => console.log(e.message);

    f.controls.nome.setValue('');
    f.controls.sobrenome.setValue('');
    f.controls.email.setValue('');
    f.controls.senha.setValue('');
    f.controls.cidade.setValue('');

    
    
  }
}