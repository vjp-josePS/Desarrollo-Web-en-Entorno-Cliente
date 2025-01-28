import { Component } from '@angular/core';
import { ListaProductosComponent } from './components/ListaProductos/ListaProductosComponent';

@Component({
  selector: 'app-root',
  imports: [ListaProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Mi primera App con Angular';
}
