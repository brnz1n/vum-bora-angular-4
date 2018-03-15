import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login-pessoa/login-pessoa.component';
import { CadastroPessoaComponent } from './pages/cadastro-pessoa/cadastro-pessoa.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'pessoa/cadastro', component: CadastroPessoaComponent }
]


@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }