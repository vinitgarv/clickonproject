import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutconfirmComponent } from './checkoutconfirm.component';

describe('CheckoutconfirmComponent', () => {
  let component: CheckoutconfirmComponent;
  let fixture: ComponentFixture<CheckoutconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutconfirmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
