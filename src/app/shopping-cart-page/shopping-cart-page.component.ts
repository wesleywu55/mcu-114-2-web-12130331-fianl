import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-cart-page.component.html',
  styleUrl: './shopping-cart-page.component.scss',
})
export class ShoppingCartPageComponent {
  protected readonly cartService = inject(ShoppingCartService);

  protected name = '';
  protected address = '';
  protected phone = '';

  protected onSubmit(): void {
    if (!this.name || !this.address || !this.phone) {
      return;
    }
    alert('訂單已送出！');
    this.cartService.clearCart();
    this.name = '';
    this.address = '';
    this.phone = '';
  }
}
