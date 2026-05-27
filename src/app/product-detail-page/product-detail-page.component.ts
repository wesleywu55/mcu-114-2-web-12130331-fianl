import { CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent {
  readonly product = input.required<Product>();

  private readonly router = inject(Router);

  private readonly cartService = inject(ShoppingCartService);

  protected hasSpecialPrice(): boolean {
    return this.normalizeSpecialPrice(this.product().specialPrice) !== null;
  }

  protected displayPrice(): number {
    const product = this.product();
    return this.normalizeSpecialPrice(product.specialPrice) ?? product.price;
  }

  private normalizeSpecialPrice(value: number | null | undefined): number | null {
    return typeof value === 'number' && Number.isFinite(value) ? value : null;
  }

  onBack(): void {
    this.router.navigate(['products']);
  }

  onAddToCart(): void {
    const product = this.product();
    const effectivePrice = this.displayPrice();
    this.cartService.addProduct(new Product({ ...product, price: effectivePrice }));
    this.router.navigate(['products']);
  }
}
