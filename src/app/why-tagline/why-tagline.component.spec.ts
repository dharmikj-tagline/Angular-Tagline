import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTaglineComponent } from './why-tagline.component';

describe('WhyTaglineComponent', () => {
  let component: WhyTaglineComponent;
  let fixture: ComponentFixture<WhyTaglineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyTaglineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyTaglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
