import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LivroResponseDto } from '../../../model';
import { LivroControllerService } from '../../../services/livro-controller/livro-controller.service';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  books: LivroResponseDto[] = [];

  constructor(private readonly livroService: LivroControllerService) { }

  ngOnInit() {
    this.livroService.getAllBooks().subscribe({
      next: (data) => {
        this.books = data; // Salva os dados retornados na variável
        console.log('Livros:', this.books); // Verifica os dados no console
      },
      error: (error) => {
        console.error('Erro ao buscar livros:', error); // Trata erros
      },
    });
  }
}
