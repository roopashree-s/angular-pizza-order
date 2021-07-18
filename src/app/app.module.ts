import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderService } from './service/order.service';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, OrderListComponent, OrderDetailComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'orders', component: OrderListComponent },
      {
        path: 'orders/:Id',
        component: OrderDetailComponent
      },
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      { path: '**', redirectTo: 'orders', pathMatch: 'full' }
    ])
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
