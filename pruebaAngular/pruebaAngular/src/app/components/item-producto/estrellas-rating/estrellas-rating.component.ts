import { Component, Input, OnInit, Output } from "@angular/core";
import { CurrencyPipe, DatePipe } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import { EventEmitter } from "stream";

@Component({
    selector: 'estrellas-rating',
    imports: [CurrencyPipe, DatePipe, MatIcon],
    templateUrl: "./estrellas-rating.component.html"
})

export class EstrellasRatingComponent implements OnInit{
    @Input() numEstrellas: number = 0;
    numEstrellasAux: number = 0;

    @Output() numEstrellasCambiadas = new EventEmitter<number>();

    setPuntuacion(){
        this.numEstrellasCambiadas.emit(this.numEstrellasAux);
    }
    
    restaurarEstrellas(){
        this.numEstrellasAux = this.numEstrellas;
    }

    ngOnInit(): void{
        this.restaurarEstrellas();
    }

    
}