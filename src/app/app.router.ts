import { LoginPessoaFormComponent } from './pages/login-pessoa/login-pessoa-form/login-pessoa-form.component';
import { CadastroPessoaComponent } from './pages/cadastro-pessoa/cadastro-pessoa.component';
import { PostComponent } from './post/post.component';
import { DescricaoEventoComponent } from './pages/descricao-evento/descricao-evento.component';
import { Routes, RouterModule } from '@angular/router';
import { PostagemComponent } from './pages/postagem/postagem.component';
import { PostagemFormComponent } from './pages/postagem/postagem-form/postagem-form.component';
import { PostagemListComponent } from './pages/postagem/postagem-list/postagem-list.component';
import { LoginPessoaComponent } from './pages/login-pessoa/login-pessoa.component';



const routes: Routes = [
    //Pagina de descrição de eventos
    {
        path:"descricaoEvento",
        component:DescricaoEventoComponent
    },
    {
        path:"post",
        component: PostComponent
    },
    {
        path:"cadastro",
        component: CadastroPessoaComponent
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
        component:LoginPessoaFormComponent
    }
    

];


export const RoutingModule = RouterModule.forRoot(routes);
