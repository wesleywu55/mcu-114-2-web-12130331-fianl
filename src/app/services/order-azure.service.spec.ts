import { TestBed } from '@angular/core/testing';

import { OrderAzureService } from './order-azure.service';

describe('OrderAzureService', () => {
  let service: OrderAzureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderAzureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
