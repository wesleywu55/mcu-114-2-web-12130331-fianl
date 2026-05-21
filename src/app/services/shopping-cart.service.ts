import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../model/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private readonly _items = signal<CartItem[]>([]);

  readonly items = this._items.asReadonly();

  readonly totalCount = computed(() => this._items().reduce((acc, item) => acc + item.quantity, 0));

  readonly totalPrice = computed(() => this._items().reduce((acc, item) => acc + item.product.price * item.quantity, 0));

  addProduct(product: Product): void {
    const currentItems = this._items();
    const existingItem = currentItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      this._items.set(
        currentItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      this._items.set([...currentItems, { product, quantity: 1 }]);
    }
  }

  removeProduct(productId: string): void {
    this._items.set(this._items().filter((item) => item.product.id !== productId));
  }

  updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeProduct(productId);
      return;
    }
    this._items.set(
      this._items().map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }

  clearCart(): void {
    this._items.set([]);
  }
}
