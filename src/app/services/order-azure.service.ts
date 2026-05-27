import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface OrderDetailPayload {
  productId: string;
  quantity: number;
}

export interface OrderPayload {
  customerName: string;
  address: string;
  phone: string;
  orderDetails: OrderDetailPayload[];
}

@Injectable({
  providedIn: 'root',
})
export class OrderAzureService {
  private readonly url = 'https://mcu-shopping-api.azurewebsites.net/api/order';

  private readonly studentId = '12130331';

  private readonly httpClient = inject(HttpClient);

  createOrder(order: OrderPayload): Observable<unknown> {
    return this.httpClient.post(this.url, { ...order, studentId: this.studentId });
  }
}
