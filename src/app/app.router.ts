import { Routes, RouterModule } from '@angular/router';

//import das paginas
import { CadastroPessoaComponent } from './pages/cadastro-pessoa/cadastro-pessoa.component';
import { PostagemComponent } from './pages/postagem/postagem.component';
import { PostagemFormComponent } from './pages/postagem/postagem-form/postagem-form.component';
import { LoginComponent } from './pages/login-pessoa/login-pessoa.component';
import { Component } from '@angular/core';
import { PostagemListComponent } from './pages/postagem/postagem-list/postagem-list.component';


const routes: Routes = [
    //PRotas das paginas
    {
        path:"cadastro",
        component: CadastroPessoaComponent
    },
    {
        path:"postagem",
        component: PostagemFormComponent
    },
    {
       path:"",
       component:PostagemListComponent
    },
    {
        path:"login",
        component: LoginComponent
    }
    

];


export const RoutingModule = RouterModule.forRoot(routes);
