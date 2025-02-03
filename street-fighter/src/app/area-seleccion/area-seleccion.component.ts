import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargarLuchadoresService } from '../cargar-luchadores.service';
import { ILuchador } from '../interfaces/luchador.interface';
import { RetratoLuchadorComponent } from '../retrato-luchador/retrato-luchador.component';

@Component({
    selector: 'app-area-seleccion',
    standalone: true,
    imports: [CommonModule, RetratoLuchadorComponent],
    template: `
      <div class="contenedor-luchadores">
        <div class="fila" *ngFor="let par of luchadoresAgrupados; let i = index">
          <app-retrato-luchador 
            *ngFor="let luchador of par; let j = index" 
            [luchador]="luchador"
            [numLuchador]="i * 2 + j"
            [indiceSeleccionado]="indiceSeleccionado"
            (seleccionado)="seleccionarLuchador($event)">
          </app-retrato-luchador>
        </div>
      </div>
      <p *ngIf="indiceSeleccionado !== -1">Luchador seleccionado: {{luchadores[indiceSeleccionado].nombre}}</p>
    `,
    styles: [`
      .contenedor-luchadores {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .fila {
        display: flex;
        gap: 10px;
      }
    `]
  })
  export class AreaSeleccionComponent implements OnInit {
    luchadores: ILuchador[] = [];
    luchadoresAgrupados: ILuchador[][] = [];
    indiceSeleccionado: number = -1;
  
    constructor(private cargarLuchadoresService: CargarLuchadoresService) {}
  
    ngOnInit() {
      this.luchadores = this.cargarLuchadoresService.getLuchadores();
      this.agruparLuchadores();
    }
  
    agruparLuchadores() {
      for (let i = 0; i < this.luchadores.length; i += 2) {
        this.luchadoresAgrupados.push(this.luchadores.slice(i, i + 2));
      }
    }
  
    seleccionarLuchador(indice: number) {
      this.indiceSeleccionado = this.indiceSeleccionado === indice ? -1 : indice;
    }
  }