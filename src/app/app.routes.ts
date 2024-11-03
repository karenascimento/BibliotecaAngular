import { Routes } from '@angular/router';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { EmprestimoLivrosComponent } from './emprestimo-livros/emprestimo-livros.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

export const routes: Routes = [
    { path: 'home', component: PaginaInicialComponent },
    { path: 'cadastro', component: CadastrosComponent },
    { path: 'cadastrolivro', component: CadastroLivrosComponent },
    { path: 'emprestimolivro', component: EmprestimoLivrosComponent },
];
