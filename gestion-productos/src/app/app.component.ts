import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListaProductosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestion-productos';
}
