import { Component, OnInit, Input} from '@angular/core';
import { IProducto } from '../../interfaces/i-producto';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { EstrellasPipe } from '../../pipes/estrellas.pipe';
import { MatIcon } from '@angular/material/icon'

@Component({
  selector: 'item-producto',
  imports: [CurrencyPipe, DatePipe, EstrellasPipe, MatIcon],
  templateUrl: './item-producto.component.html',
  styleUrl: './item-producto.component.scss'
})
export class ItemProductoComponent implements OnInit{
 @Input() productoInput: IProducto | any;
 
  verImagenes = true;
  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
