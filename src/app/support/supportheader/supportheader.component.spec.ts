import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportheaderComponent } from './supportheader.component';

describe('SupportheaderComponent', () => {
  let component: SupportheaderComponent;
  let fixture: ComponentFixture<SupportheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
