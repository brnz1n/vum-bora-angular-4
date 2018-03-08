import { PostComponent } from './post/post.component';
import { DescricaoEventoComponent } from './pages/descricao-evento/descricao-evento.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    //Pagina de descrição de eventos
    {
        path:"descricaoEvento",
        component:DescricaoEventoComponent
    },
    {
        path:"post",
        component: PostComponent
    }

];


export const RoutingModule = RouterModule.forRoot(routes);
