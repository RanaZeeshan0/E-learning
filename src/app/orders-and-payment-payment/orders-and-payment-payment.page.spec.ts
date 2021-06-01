import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdersAndPaymentPaymentPage } from './orders-and-payment-payment.page';

describe('OrdersAndPaymentPaymentPage', () => {
  let component: OrdersAndPaymentPaymentPage;
  let fixture: ComponentFixture<OrdersAndPaymentPaymentPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersAndPaymentPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersAndPaymentPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
