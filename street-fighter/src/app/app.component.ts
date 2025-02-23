import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AreaSeleccionComponent } from './area-seleccion/area-seleccion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModificarRetratosComponent } from './modificar-retratos/modificar-retratos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AreaSeleccionComponent, NavbarComponent, ModificarRetratosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'street-fighter';
}
