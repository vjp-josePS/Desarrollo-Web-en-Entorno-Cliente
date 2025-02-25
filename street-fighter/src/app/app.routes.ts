import { Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AreaSeleccionComponent } from './area-seleccion/area-seleccion.component';
import { AntesLucharComponent } from './antes-luchar/antes-luchar.component';
import { ModificarRetratosComponent } from './modificar-retratos/modificar-retratos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full' },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'area-seleccion', component: AreaSeleccionComponent },
  { path: 'antes-luchar', component: AntesLucharComponent },
  { path: 'modificar-retratos', component: ModificarRetratosComponent }
];
