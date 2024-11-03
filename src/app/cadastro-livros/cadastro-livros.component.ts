import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-livros',
  standalone: true,
  imports: [],
  templateUrl: './cadastro-livros.component.html',
  styleUrl: './cadastro-livros.component.css'
})
export class CadastroLivrosComponent {

}

/*import { Component, OnInit } from '@angular/core';
import { CadastroLivrosService } from './cadastro-livros.service';
import { Livro } from '../models/livro.nodel';

@Component({
    selector: 'app-cadastro-livros',
    templateUrl: './cadastro-livros.component.html',
    styleUrls: ['./cadastro-livros.component.css']
})
export class CadastroLivrosComponent implements OnInit {
    livros: Livro[] = [];
    novoLivro: Livro = { title: '', author: '' };

    constructor(private cadastroLivrosService: CadastroLivrosService) {}

    ngOnInit(): void {
        this.getLivros();
    }

    getLivros(): void {
        this.cadastroLivrosService.getLivros().subscribe(livros => {
            this.livros = livros;
        });
    }

    adicionarLivro(): void {
        this.cadastroLivrosService.createLivro(this.novoLivro).subscribe(livro => {
            this.livros.push(livro);
            this.novoLivro = { title: '', author: '' };
        });
    }

} */
