import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrderDetail } from '../../model/order-detail';
import { OrderService } from '../../service/order.service';
import { STATUS_TRANSLATE } from '../../model/status';

@Component({
  templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent implements OnInit {
  orderDetail: IOrderDetail;
  statusTrans = STATUS_TRANSLATE;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('Id');
    this.orderDetail = this.orderService.getOrderDetail(id);
    console.log(this.orderDetail, id);
  }
  onBack(): void {
    this.router.navigate(['/orders']);
  }
}
