//import do angular
import { FirebaseConfig } from './../environments/firebase.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './app.router';
import { AngularFireModule } from 'angularfire2';

//import das paginas
import { AppComponent } from './app.component';
import { CadastroPessoaModule } from './pages/cadastro-pessoa/cadastro-pessoa.module';
import { CadastroPessoaComponent } from './pages/cadastro-pessoa/cadastro-pessoa.component';
import { CadastroPessoaFormComponent } from './pages/cadastro-pessoa/cadastro-pessoa-form/cadastro-pessoa-form.component';
import { PostagemComponent } from './pages/postagem/postagem.component';
import { PostagemFormComponent } from './pages/postagem/postagem-form/postagem-form.component';
import { PostagemListComponent } from './pages/postagem/postagem-list/postagem-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PostagemComponent,
    PostagemFormComponent,
    PostagemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    
    CadastroPessoaModule,
    AngularFireModule.initializeApp(FirebaseConfig) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
