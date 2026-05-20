import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data: Product[] = [
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

  getList(): Product[] {
    return this._data;
  }
}
