import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estrellas'
})
export class EstrellasPipe implements PipeTransform {

  transform(puntuacion: number): string {
    const numEstrellasCompletas = Math.floor(puntuacion);
    const numEstrellasVacias = 5 - numEstrellasCompletas;
    const estrellasCompletas = '★'.repeat(numEstrellasCompletas);
    const estrellasVacias = '☆'.repeat(numEstrellasVacias);
    return estrellasCompletas + estrellasVacias;
  }

}
