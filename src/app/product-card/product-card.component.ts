import { CurrencyPipe } from '@angular/common';
import { Component, inject, input, numberAttribute, output } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  host: { class: 'app-product-card' },
})
export class ProductCardComponent {
  private readonly cartService = inject(ShoppingCartService);

  readonly id = input.required<string>();

  readonly productName = input<string>();

  readonly authors = input<string[]>();

  readonly company = input<string>();

  readonly photoUrl = input<string>();

  readonly price = input<number, string | number>(0, { transform: numberAttribute });

  readonly view = output<void>();

  onAddToCart(): void {
    const product = new Product({
      id: this.id(),
      name: this.productName(),
      authors: this.authors(),
      company: this.company(),
      photoUrl: this.photoUrl(),
      price: this.price(),
    });
    this.cartService.addProduct(product);
  }
}
