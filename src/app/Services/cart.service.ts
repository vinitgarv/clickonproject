import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './localstorage.service';

@Injectable({ providedIn: 'root' })
export class CartService {

  storageService:StorageService = inject(StorageService)
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private totalItemsSubject = new BehaviorSubject<number>(0);
  totalItems$ = this.totalItemsSubject.asObservable();

  private localStorageKey = 'cartItems';

  constructor() {
    const savedCart = this.storageService.getItem(this.localStorageKey);
    const initialCart = savedCart ? JSON.parse(savedCart) : [];
    this.cartItemsSubject.next(initialCart);
    this.updateTotalItemCount(initialCart);
  }

  getCartItems(): any[] {
    return this.cartItemsSubject.value;
  }

  private updateLocalStorage(cart: any[]) {
    this.storageService.setItem(this.localStorageKey, JSON.stringify(cart));
  }

  updateTotalItemCount(products: any[]) {
      const uniqueCount = products.filter(item => item.quantity > 0).length;
  this.totalItemsSubject.next(uniqueCount);
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
    this.updateLocalStorage(currentCart);
  }

  removeFromCart(productId: number) {
    const updatedCart = this.getCartItems().filter(item => item.id !== productId);
    this.cartItemsSubject.next(updatedCart);
    this.updateTotalItemCount(updatedCart);
    this.updateLocalStorage(updatedCart);
  }

  updateQuantity(productId: number, quantity: number) {
    const currentCart = this.getCartItems();
    const index = currentCart.findIndex(p => p.id === productId);
    if (index !== -1) {
      currentCart[index].quantity = quantity;
      this.cartItemsSubject.next([...currentCart]);
      this.updateTotalItemCount(currentCart);
      this.updateLocalStorage(currentCart);
    }
  }

  clearCart() {
    this.cartItemsSubject.next([]);
    this.updateTotalItemCount([]);
    localStorage.removeItem(this.localStorageKey);
  }
}
