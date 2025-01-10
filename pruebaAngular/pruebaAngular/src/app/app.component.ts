import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProductosComponent } from './carrousel/ListaProductosComponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaProductosComponent],
  templateUrl: './app.component.html',
  //template: '<p>hola soy {{nombre}}</p>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mi primera App con Angular';
  nombre = "Jose";
}
