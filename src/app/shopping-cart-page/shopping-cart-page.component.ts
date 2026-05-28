import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { OrderAzureService, OrderPayload } from '../services/order-azure.service';

@Component({
  selector: 'app-shopping-cart-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shopping-cart-page.component.html',
  styleUrl: './shopping-cart-page.component.scss',
})
export class ShoppingCartPageComponent {
  protected readonly cartService = inject(ShoppingCartService);
  private readonly orderService = inject(OrderAzureService);
  private readonly fb = inject(FormBuilder);

  protected readonly checkoutForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, ShoppingCartPageComponent.noWhitespaceValidator]],
    address: ['', [Validators.required, ShoppingCartPageComponent.noWhitespaceValidator]],
    phone: ['', [Validators.required, ShoppingCartPageComponent.noWhitespaceValidator]],
  });

  private static noWhitespaceValidator(control: AbstractControl<string>): ValidationErrors | null {
    return control.value.trim().length === 0 ? { whitespace: true } : null;
  }

  protected onSubmit(): void {
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }

    const { name, address, phone } = this.checkoutForm.getRawValue();
    const orderData: OrderPayload = {
      customerName: name,
      address,
      phone,
      orderDetails: this.cartService.items().map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      })),
    };

    this.orderService.createOrder(orderData).subscribe({
      next: () => {
        alert('訂單已送出');
        this.cartService.clearCart();
        this.checkoutForm.reset({ name: '', address: '', phone: '' });
      },
      error: (err) => {
        console.error('訂單送出失敗', err);
        alert('訂單送出失敗');
      },
    });
  }
}
