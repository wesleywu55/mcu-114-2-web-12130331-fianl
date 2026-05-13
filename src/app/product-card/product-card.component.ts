import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  protected productName = 'A 產品';
  protected author = '作者A、作者B、作者C';
  protected company = '博碩文化';
}
