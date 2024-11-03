import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { routes } from './app.routes';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { EmprestimoLivrosComponent } from './emprestimo-livros/emprestimo-livros.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
//import { FormsModule } from './cadastro-livros/cadastro-livros.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,
    CadastrosComponent,
    CadastroLivrosComponent,
    EmprestimoLivrosComponent,
    PaginaInicialComponent,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppModule { }