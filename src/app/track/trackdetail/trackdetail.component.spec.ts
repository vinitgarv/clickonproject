import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackdetailComponent } from './trackdetail.component';

describe('TrackdetailComponent', () => {
  let component: TrackdetailComponent;
  let fixture: ComponentFixture<TrackdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
