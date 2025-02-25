import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRetratoComponent } from '../edit-retrato/edit-retrato.component';
import { ILuchador } from '../interfaces/luchador.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modificar-retratos',
  standalone: true,
  imports: [CommonModule, EditRetratoComponent],
  templateUrl: './modificar-retratos.component.html',
  styleUrls: ['./modificar-retratos.component.css']
})
export class ModificarRetratosComponent implements OnInit {
  luchadores: ILuchador[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Obtiene los luchadores al inicializar el componente
    this.getLuchadores().subscribe(luchadores => {
      this.luchadores = luchadores;
    });
  }

  // Método para obtener los luchadores del servidor
  getLuchadores(): Observable<ILuchador[]> {
    return this.http.get<ILuchador[]>('http://localhost:3000/luchadores');
  }
}
