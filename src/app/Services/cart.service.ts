import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private totalItemsSubject = new BehaviorSubject<number>(0);
  totalItems$ = this.totalItemsSubject.asObservable();

  productservice:ProductService = inject(ProductService);

  constructor() {
    const initialCart :any[] = [];
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

    addToCart(product: any) {
    const currentCart = this.getCartItems();
    const index = currentCart.findIndex(p => p.id === product.id);
    if (index > -1) {
      currentCart[index].quantity += 1;
    } else {
      currentCart.push({ ...product, quantity: 1 });
    }
    this.cartItemsSubject.next([...currentCart]);
    this.updateTotalItemCount(currentCart);
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
