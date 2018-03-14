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
<<<<<<< HEAD
import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './login/login.module';
import { ApplicationModule, NgModule } from '@angular/core';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
=======
import { LoginPessoaComponent } from './pages/login-pessoa/login-pessoa.component';
import { LoginPessoaFormComponent } from './pages/login-pessoa/login-pessoa-form/login-pessoa-form.component';


>>>>>>> 7c83e6c1711cad3f0b21a905c20421eca740e09c
@NgModule({
  declarations: [
    AppComponent,
  
    DescricaoEventoComponent,
    PostagemComponent,
    PostagemFormComponent,
    PostagemListComponent,
<<<<<<< HEAD
    CadastroPessoaComponent   
    
=======
    LoginPessoaComponent,
    LoginPessoaFormComponent
>>>>>>> 7c83e6c1711cad3f0b21a905c20421eca740e09c
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
