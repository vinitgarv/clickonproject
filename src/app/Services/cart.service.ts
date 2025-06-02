import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private totalItemsSubject = new BehaviorSubject<number>(0);
  totalItems$ = this.totalItemsSubject.asObservable();

  constructor() {
    const initialCart = [
      {
        id: 1, name: 'Canon EOS 1500D DSLR Camera',
        price: 70,
        quantity: 1,
        image: 'TV.svg',
        discount: 20,
        tax: 20
      },
      {
        id: 2,
        name: 'Canon EOS 1500D DSLR Camera',
        price: 150,
        quantity: 1,
        image: 'TV.svg',
        discount: 30,
        tax: 40
      },
    ];
    this.cartItemsSubject.next(initialCart);
    this.updateTotalItemCount(initialCart);
  }

  updateTotalItemCount(products: any[]) {
    const uniqueCount = products.filter(item => item.quantity > 0).length;
    this.totalItemsSubject.next(uniqueCount);
  }

  getCartItems(): any[] {
    return this.cartItemsSubject.value;
  }

  removeFromCart(productId: number) {
    const updatedCart = this.getCartItems().filter(item => item.id !== productId);
    this.cartItemsSubject.next(updatedCart);
    this.updateTotalItemCount(updatedCart);
  }

  updateQuantity(productId: number, quantity: number) {
    const currentCart = this.getCartItems();
    const index = currentCart.findIndex(p => p.id === productId);
    if (index !== -1) {
      currentCart[index].quantity = quantity;
      this.cartItemsSubject.next([...currentCart]);
      this.updateTotalItemCount(currentCart);
    }
  }

}
