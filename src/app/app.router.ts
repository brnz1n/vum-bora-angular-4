<<<<<<< HEAD


=======
import { LoginPessoaFormComponent } from './pages/login-pessoa/login-pessoa-form/login-pessoa-form.component';
import { CadastroPessoaComponent } from './pages/cadastro-pessoa/cadastro-pessoa.component';
import { PostComponent } from './post/post.component';
>>>>>>> 7c83e6c1711cad3f0b21a905c20421eca740e09c
import { DescricaoEventoComponent } from './pages/descricao-evento/descricao-evento.component';
import { Routes, RouterModule } from '@angular/router';
import { PostagemComponent } from './pages/postagem/postagem.component';
import { PostagemFormComponent } from './pages/postagem/postagem-form/postagem-form.component';
import { PostagemListComponent } from './pages/postagem/postagem-list/postagem-list.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { CadastroPessoaComponent } from './pages/cadastro-pessoa/cadastro-pessoa.component';
=======
import { LoginPessoaComponent } from './pages/login-pessoa/login-pessoa.component';



>>>>>>> 7c83e6c1711cad3f0b21a905c20421eca740e09c
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
<<<<<<< HEAD
        component:LoginComponent
     },
     {
        path:"cadastro",
        component:CadastroPessoaComponent
     }
=======
        component:LoginPessoaFormComponent
    }
>>>>>>> 7c83e6c1711cad3f0b21a905c20421eca740e09c
    

];


export const RoutingModule = RouterModule.forRoot(routes);
