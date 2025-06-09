import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V20Component } from './v20.component';

describe('V20Component', () => {
  let component: V20Component;
  let fixture: ComponentFixture<V20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
