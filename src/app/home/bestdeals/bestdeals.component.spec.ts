import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestdealsComponent } from './bestdeals.component';

describe('BestdealsComponent', () => {
  let component: BestdealsComponent;
  let fixture: ComponentFixture<BestdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestdealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
