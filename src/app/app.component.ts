import { Component, signal } from '@angular/core';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { Product } from './model/product';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductCardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  protected products = [
    new Product({
      id: 1,
      name: 'A 產品',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 15800,
    }),
    new Product({
      id: 2,
      name: 'B 產品',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 15800,
    }),
    new Product({
      id: 3,
      name: 'C 產品',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 15800,
    }),
    new Product({
      id: 4,
      name: 'D 產品',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 15800,
    }),
    new Product({
      id: 5,
      name: 'E 產品',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 15800,
    }),
  ];
}
