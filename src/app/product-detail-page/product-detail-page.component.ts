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

  onBack(): void {
    this.router.navigate(['products']);
  }

  onAddToCart(): void {
    this.cartService.addProduct(this.product());
  }
}
