import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewRateStarComponent } from './review-rate-star.component';

describe('ReviewRateStarComponent', () => {
  let component: ReviewRateStarComponent;
  let fixture: ComponentFixture<ReviewRateStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewRateStarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewRateStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
