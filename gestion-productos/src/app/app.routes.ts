import { Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { EditarDetallesProductoComponent } from './editar-detalles-producto/editar-detalles-producto.component';

export const routes: Routes = [
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'productos/:id', component: DetallesProductoComponent },
  { path: 'productos/editar/:id', component: EditarDetallesProductoComponent },
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full' },
  { path: '**', redirectTo: '/bienvenida', pathMatch: 'full' }
];
