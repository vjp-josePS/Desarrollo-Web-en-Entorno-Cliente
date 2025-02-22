import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ILuchador } from '../interfaces/luchador.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-antes-luchar',
  templateUrl: './antes-luchar.component.html',
  styleUrls: ['./antes-luchar.component.css']
})
export class AntesLucharComponent implements OnInit {

  luchadorSeleccionado: ILuchador | undefined;
  luchadorAleatorio: ILuchador | undefined;
  luchadores: ILuchador[] = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getLuchadores().subscribe(luchadores => {
      this.luchadores = luchadores;
      this.luchadorSeleccionado = this.getLuchadorSeleccionado();
      this.luchadorAleatorio = this.getLuchadorAleatorio();
    });
  }

  getLuchadores(): Observable<ILuchador[]> {
    return this.http.get<ILuchador[]>('http://localhost:3000/luchadores');
  }

  getLuchadorSeleccionado(): ILuchador | undefined {
    if (typeof localStorage !== 'undefined') { // Comprueba si localStorage está definido
      const luchadorSeleccionadoId = localStorage.getItem('luchadorSeleccionado');
      if (luchadorSeleccionadoId) {
        return this.luchadores.find(luchador => luchador.nombre === luchadorSeleccionadoId);
      }
    }
    return undefined;
  }

  getLuchadorAleatorio(): ILuchador {
    const indiceAleatorio = Math.floor(Math.random() * this.luchadores.length);
    return this.luchadores[indiceAleatorio];
  }

  iniciarPelea() {
    this.router.navigate(['/pelea']);
  }
}
