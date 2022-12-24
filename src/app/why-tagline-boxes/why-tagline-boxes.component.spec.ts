import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTaglineBoxesComponent } from './why-tagline-boxes.component';

describe('WhyTaglineBoxesComponent', () => {
  let component: WhyTaglineBoxesComponent;
  let fixture: ComponentFixture<WhyTaglineBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyTaglineBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyTaglineBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
