import { CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-detail-page',
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent {
  protected readonly product = signal(
    new Product({
      id: 9,
      name: 'I 產品',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    })
  );

  private readonly router = inject(Router);

  onBack(): void {
    this.router.navigate(['products']);
  }
}
