

import { DescricaoEventoComponent } from './pages/descricao-evento/descricao-evento.component';
import { Routes, RouterModule } from '@angular/router';
import { PostagemComponent } from './pages/postagem/postagem.component';
import { PostagemFormComponent } from './pages/postagem/postagem-form/postagem-form.component';
import { PostagemListComponent } from './pages/postagem/postagem-list/postagem-list.component';
import { LoginComponent } from './login/login.component';
import { CadastroPessoaComponent } from './pages/cadastro-pessoa/cadastro-pessoa.component';
const routes: Routes = [
    //Pagina de descrição de eventos
    {
        path:"descricaoEvento",
        component:DescricaoEventoComponent
    },
   
    {
        path:"postagems",
        component: PostagemFormComponent
    },
    {
       path:"ver",
       component:PostagemListComponent
    },
    {
        path:"login",
        component:LoginComponent
     },
     {
        path:"cadastro",
        component:CadastroPessoaComponent
     }
    

];


export const RoutingModule = RouterModule.forRoot(routes);
