import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaSeleccionComponent } from './area-seleccion/area-seleccion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AreaSeleccionComponent],
  template: `
    <h1>Street Fighter</h1>
    <app-area-seleccion></app-area-seleccion>
  `,
  styles: []
})
export class AppComponent {
  title = 'Street Fighter';
}
