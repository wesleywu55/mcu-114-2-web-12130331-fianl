import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
  private readonly http = inject(HttpClient);

  protected name = '';
  protected address = '';
  protected phone = '';

  protected onSubmit(): void {
    if (!this.name || !this.address || !this.phone) {
      return;
    }

    const orderData = {
      customerName: this.name,
      address: this.address,
      phone: this.phone,
      items: this.cartService.items(),
      totalPrice: this.cartService.totalPrice(),
      date: new Date().toISOString(),
    };

    this.http.post('http://localhost:3000/orders', orderData).subscribe({
      next: () => {
        alert('訂單已送出');
        this.cartService.clearCart();
        this.name = '';
        this.address = '';
        this.phone = '';
      },
      error: (err) => {
        console.error('訂單送出失敗', err);
        alert('訂單送出失敗');
      },
    });
  }
}
