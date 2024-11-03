/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro.nodel';

@Injectable({
    providedIn: 'root'
})
export class CadastroLivrosService {
    private apiUrl = 'http://localhost:8080/api/books';

    constructor(private http: HttpClient) {}

    getLivros(): Observable<Livro[]> {
        return this.http.get<Livro[]>(this.apiUrl);
    }

    getLivroPorId(id: number): Observable<Livro> {
        return this.http.get<Livro>(`${this.apiUrl}/${id}`);
    }

    createLivro(bookRegistration: Livro): Observable<Livro> {
        return this.http.post<Livro>(this.apiUrl, bookRegistration);
    }

    updateLivro(id: number, bookRegistration: Livro): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, bookRegistration);
    }

    deleteLivro(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}*/
