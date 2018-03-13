import { FirebaseConfig } from './../environments/firebase.config';
import { CadastroPessoaModule } from './pages/cadastro-pessoa/cadastro-pessoa.module';
import { CadastroPessoaFormComponent } from './pages/cadastro-pessoa/cadastro-pessoa-form/cadastro-pessoa-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { DescricaoEventoComponent } from './pages/descricao-evento/descricao-evento.component';
import { RoutingModule } from './app.router';
import { CadastroPessoaComponent } from './pages/cadastro-pessoa/cadastro-pessoa.component';
import { AngularFireModule } from 'angularfire2';
import { PostagemComponent } from './pages/postagem/postagem.component';
import { PostagemFormComponent } from './pages/postagem/postagem-form/postagem-form.component';
import { PostagemListComponent } from './pages/postagem/postagem-list/postagem-list.component';
import { LoginPessoaComponent } from './pages/login-pessoa/login-pessoa.component';
import { LoginPessoaFormComponent } from './pages/login-pessoa/login-pessoa-form/login-pessoa-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DescricaoEventoComponent,
    PostagemComponent,
    PostagemFormComponent,
    PostagemListComponent,
    LoginPessoaComponent,
    LoginPessoaFormComponent
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
