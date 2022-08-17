import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartItemTotalPrice'
})
export class CartItemTotalPricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
