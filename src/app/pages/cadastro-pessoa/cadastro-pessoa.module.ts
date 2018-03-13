import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroPessoaComponent } from './cadastro-pessoa.component';

import { AngularFireDatabase } from 'angularfire2/database';
import { CadastroPessoaFormComponent } from './cadastro-pessoa-form/cadastro-pessoa-form.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  providers:[AngularFireDatabase],
  exports: [
    CadastroPessoaComponent
  ],
  declarations: [
    CadastroPessoaComponent,
    CadastroPessoaFormComponent]
})
export class CadastroPessoaModule { }
