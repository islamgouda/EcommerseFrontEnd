import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number,discount:number, ...args: unknown[]): unknown {
    let val =value - value*discount;
    return val.toFixed(2);
  }

}
