import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlenavbarComponent } from './middlenavbar.component';

describe('MiddlenavbarComponent', () => {
  let component: MiddlenavbarComponent;
  let fixture: ComponentFixture<MiddlenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddlenavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddlenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
