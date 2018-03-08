import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { DescricaoEventoComponent } from './pages/descricao-evento/descricao-evento.component';
import { RoutingModule } from './app.router';




@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DescricaoEventoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
