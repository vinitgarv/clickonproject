import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportcontactComponent } from './supportcontact.component';

describe('SupportcontactComponent', () => {
  let component: SupportcontactComponent;
  let fixture: ComponentFixture<SupportcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportcontactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
