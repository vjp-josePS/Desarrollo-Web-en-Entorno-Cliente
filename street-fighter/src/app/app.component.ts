import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AreaSeleccionComponent } from './area-seleccion/area-seleccion.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AreaSeleccionComponent, NavbarComponent],
  templateUrl: './app.component.html', // Definimos la ruta al archivo HTML del template
  styleUrls: ['./app.component.css'] // Definimos la ruta al archivo CSS de estilos
})
export class AppComponent {
  title = 'Street Fighter';
}
