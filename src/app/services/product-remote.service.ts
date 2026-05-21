import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Product } from '../model/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductRemoteService extends ProductService {
  private readonly url = 'http://localhost:3000/products';

  private readonly httpClient = inject(HttpClient);

  override getById(productId: string): Observable<Product> {
    const url = `${this.url}/${productId}`;
    return this.httpClient.get<Product>(url);
  }

  override getList(name: string | undefined, index: number, size: number): Observable<{ data: Product[]; count: number }> {
    let query = {} as any;
    if (name) query = { ...query, name_like: name };
    const params = new HttpParams({ fromObject: query });

    return this.httpClient.get<Product[]>(this.url, { params }).pipe(
      map((allData) => {
        const visibleData = allData.filter((p) => !p.hidden);

        const totalCount = visibleData.length;

        const startIndex = (index - 1) * size;
        const paginatedData = visibleData.slice(startIndex, startIndex + size);

        return { data: paginatedData, count: totalCount };
      })
    );
  }
}
