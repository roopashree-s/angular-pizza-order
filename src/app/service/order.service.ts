import { Injectable, Input } from '@angular/core';
import { of } from 'rxjs';
import { orders } from '../data/orders';
@Injectable()
export class OrderService {
  constructor() {}
  getOrders(): any {
    return of(orders);
  }

  getOrderDetail(id) {
    const orderDetail = orders.find(o => o.orderId == id);
    return orderDetail;
  }

  updateStatus(product): any {
    return of([]);
  }
}
