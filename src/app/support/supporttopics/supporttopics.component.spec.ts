import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupporttopicsComponent } from './supporttopics.component';

describe('SupporttopicsComponent', () => {
  let component: SupporttopicsComponent;
  let fixture: ComponentFixture<SupporttopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupporttopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupporttopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
