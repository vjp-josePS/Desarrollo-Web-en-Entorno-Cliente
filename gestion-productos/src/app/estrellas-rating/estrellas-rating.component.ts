import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estrellas-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="estrellas">
      @for (estrella of estrellas; track $index) {
        <span (click)="onClick(estrella)" [class.active]="estrella <= numEstrellas">★</span>
      }
    </div>
  `,
})
export class EstrellasRatingComponent implements OnInit {
  @Input() numEstrellas: number = 0;
  @Output() numEstrellasCambiadas = new EventEmitter<number>();

  numEstrellasMaximas = 5;
  estrellas: number[] = [];

  ngOnInit(): void {
    this.estrellas = Array(this.numEstrellasMaximas).fill(0).map((_, i) => i + 1);
  }

  onClick(numeroEstrella: number): void {
    this.numEstrellas = numeroEstrella;
    this.numEstrellasCambiadas.emit(this.numEstrellas);
  }
}
