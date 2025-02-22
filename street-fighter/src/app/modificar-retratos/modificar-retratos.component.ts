import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ILuchador } from '../interfaces/luchador.interface';
import { Observable } from 'rxjs';
import { EditRetratoComponent } from '../edit-retrato/edit-retrato.component'; // Importa EditRetratoComponent

@Component({
  selector: 'app-modificar-retratos',
  standalone: true,
  imports: [CommonModule, EditRetratoComponent], // Agrega EditRetratoComponent a la lista de imports
  templateUrl: './modificar-retratos.component.html',
  styleUrls: ['./modificar-retratos.component.css']
})
export class ModificarRetratosComponent implements OnInit {

  luchadores: ILuchador[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getLuchadores().subscribe(luchadores => {
      this.luchadores = luchadores;
    });
  }

  getLuchadores(): Observable<ILuchador[]> {
    return this.http.get<ILuchador[]>('http://localhost:3000/luchadores');
  }
}
