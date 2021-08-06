import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(array: any[], text: string, field: string): Product[] {
    if (text === '') {
      return array;
    }

    text = text.toLowerCase();

    return array.filter((item) => {
      return item[field].toLowerCase().includes(text);
    });
  }
}
