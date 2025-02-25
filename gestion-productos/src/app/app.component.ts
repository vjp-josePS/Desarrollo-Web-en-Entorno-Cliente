import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',  // Selector del componente
  standalone: true, // Define el componente como independiente
  imports: [CommonModule, RouterModule, RouterOutlet], // Módulos importados
  templateUrl: './app.component.html'  // Ruta a la plantilla HTML
})
export class AppComponent {
  title = 'Mi Primera App con Angular'; // Título de la aplicación
}
