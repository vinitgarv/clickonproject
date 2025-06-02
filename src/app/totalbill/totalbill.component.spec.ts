import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalbillComponent } from './totalbill.component';

describe('TotalbillComponent', () => {
  let component: TotalbillComponent;
  let fixture: ComponentFixture<TotalbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalbillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
