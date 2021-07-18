import { Component, OnDestroy, OnInit } from '@angular/core';
import { IOrder } from '../../model/order';
import { OrderService } from '../../service/order.service';
import { STATUS_TRANSLATE } from '../../model/status';
@Component({
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {
  errorMessage: string = '';
  statusTrans = STATUS_TRANSLATE;
  nextStatus = {
    received: 'inprogress',
    inprogress: 'ready'
  };
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In Setter:', value);
    this.filteredOrders = this.performFilter(value);
  }
  orders: IOrder[] = [];

  filteredOrders: IOrder[] = [];

  constructor(private orderService: OrderService) {}

  performFilter(filterBy: string): IOrder[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.orders.filter(
      (order: IOrder) =>
        !filterBy || order.orderId.toLocaleLowerCase().includes(filterBy)
    );
  }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      data => (this.orders = data),
      err => {
        this.errorMessage = 'failed';
        this.orders = [];
      }
    );
    this.filteredOrders = this.orders;
  }

  updateStatus(e, order) {
    e.stopPropagation();
    order.status = this.nextStatus[order.status];
  }
}
