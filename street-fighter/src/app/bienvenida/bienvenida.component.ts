import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {

  constructor(private router: Router) { }

  // Método para navegar al área de selección
  irAreaSeleccion() {
    this.router.navigate(['/area-seleccion']);
  }
}
