import { FirebaseConfig } from './../environments/firebase.config';
import { CadastroPessoaModule } from './pages/cadastro-pessoa/cadastro-pessoa.module';
import { CadastroPessoaFormComponent } from './pages/cadastro-pessoa/cadastro-pessoa-form/cadastro-pessoa-form.component';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { DescricaoEventoComponent } from './pages/descricao-evento/descricao-evento.component';
import { RoutingModule } from './app.router';
import { AngularFireModule } from 'angularfire2';
import { PostagemComponent } from './pages/postagem/postagem.component';
import { PostagemFormComponent } from './pages/postagem/postagem-form/postagem-form.component';
import { PostagemListComponent } from './pages/postagem/postagem-list/postagem-list.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './login/login.module';
import { ApplicationModule, NgModule } from '@angular/core';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
@NgModule({
  declarations: [
    AppComponent,
  
    DescricaoEventoComponent,
    PostagemComponent,
    PostagemFormComponent,
    PostagemListComponent,
    CadastroPessoaComponent   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    CadastroPessoaModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
