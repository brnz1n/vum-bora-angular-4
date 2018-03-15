import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  constructor(
    private angularFire: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() { }

  form_submit(f:NgForm){
    this.angularFire.list("pessoas").push(
      {
        nome: f.controls.nome.value,
        sobrenome: f.controls.sobrenome.value
      }

    ).then((t: any) => console.log('dados gravados:' + t.key)),
      (e: any) => console.log(e.messege);

    f.controls.nome.setValue('');
    f.controls.sobrenome.setValue('');
  }
  form_logout(){
    this.afAuth.auth.signOut();
    this.router.navigate([""]);
  }

}
