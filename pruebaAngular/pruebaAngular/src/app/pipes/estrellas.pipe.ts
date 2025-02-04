import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estrellas',
  standalone: true
})
export class EstrellasPipe implements PipeTransform {
  transform(value: number): string {
    return '★'.repeat(value) + '☆'.repeat(5 - value);
  }
}
