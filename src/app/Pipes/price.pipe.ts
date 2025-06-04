import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'cartTotal',
  pure: false
})
export class CartTotalPipe implements PipeTransform {
  transform(products: any[], type: string): number {
    let subtotal = 0;
    let tax = 0;
    let discount = 0;
    for (const item of products) {
      const quantity = item.quantity || 0;
      if (quantity >= 1) {
        subtotal += item.price * quantity;
        tax += item.tax * quantity;
        discount += item.discount || 0;
      }
    }
    switch (type) {
      case 'subtotal':
        return subtotal;
      case 'tax':
        return tax;
      case 'discount':
        return discount;
      case 'total':
        const total = subtotal + tax - discount;
        return total > 0 ? total : 0;
      default:
        return 0;
    }
  }
}
