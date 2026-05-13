import { Component, signal } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  protected productName = 'A 產品';
  protected author = '作者A、作者B、作者C';
  protected company = '博碩文化';
  protected photoUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';
}
