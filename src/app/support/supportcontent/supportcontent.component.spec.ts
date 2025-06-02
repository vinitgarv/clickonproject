import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportcontentComponent } from './supportcontent.component';

describe('SupportcontentComponent', () => {
  let component: SupportcontentComponent;
  let fixture: ComponentFixture<SupportcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
