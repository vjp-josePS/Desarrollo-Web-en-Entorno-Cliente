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
    this.getLuchadores().subscribe(data => {
      console.log('Datos recibidos de la API (modificar-retratos):', data);
      this.luchadores = data.luchadores; // Accede al array "luchadores" dentro del objeto
    });
  }

  getLuchadores(): Observable<{ luchadores: ILuchador[] }> { // Ajusta el tipo de retorno
    return this.http.get<{ luchadores: ILuchador[] }>('http://localhost:3000/luchadores');
  }
}
