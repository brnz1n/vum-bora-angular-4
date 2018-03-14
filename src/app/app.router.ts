import { Routes, RouterModule } from '@angular/router';

//import das paginas
import { CadastroPessoaComponent } from './pages/cadastro-pessoa/cadastro-pessoa.component';
import { PostagemComponent } from './pages/postagem/postagem.component';
import { PostagemFormComponent } from './pages/postagem/postagem-form/postagem-form.component';
import { PostagemListComponent } from './pages/postagem/postagem-list/postagem-list.component';


const routes: Routes = [
    //PRotas das paginas
    {
        path:"cadastro",
        component: CadastroPessoaComponent
    },
    {
        path:"postagems",
        component: PostagemFormComponent
    },
    {
       path:"index",
       component:PostagemListComponent
    }
    

];


export const RoutingModule = RouterModule.forRoot(routes);
