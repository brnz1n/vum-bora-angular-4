import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostagemComponent } from './postagem.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { PostagemFormComponent } from './postagem-form/postagem-form.component';
import { PostagemListComponent } from './postagem-list/postagem-list.component';


@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  providers:[AngularFireDatabase],
  exports:[
    PostagemComponent
  ],
  declarations: [
    PostagemComponent,
    PostagemFormComponent,
    PostagemListComponent
  ]
})
export class PostagemModule { }
