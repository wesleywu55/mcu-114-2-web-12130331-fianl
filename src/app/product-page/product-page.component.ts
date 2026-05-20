import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-page',
  imports: [PaginationComponent, ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  private readonly router = inject(Router);

  private readonly productService = inject(ProductService);

  protected readonly pageIndex = signal(1);

  protected readonly pageSize = signal(5);

  onView(product: Product): void {
    this.router.navigate(['product', product.id]);
  }

  private readonly data = rxResource({
    params: () => ({ pageIndex: this.pageIndex(), pageSize: this.pageSize() }),
    defaultValue: { data: [], count: 0 },
    stream: ({ params }) => {
      const { pageIndex, pageSize } = params;
      return this.productService.getList(undefined, pageIndex, pageSize);
    },
  });

  protected readonly totalCount = computed(() => {
    const { count } = this.data.value();
    return count;
  });

  protected readonly products = computed(() => {
    const { data } = this.data.value();
    return data;
  });
}
