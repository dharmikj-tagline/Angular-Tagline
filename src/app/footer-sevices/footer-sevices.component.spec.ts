import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSevicesComponent } from './footer-sevices.component';

describe('FooterSevicesComponent', () => {
  let component: FooterSevicesComponent;
  let fixture: ComponentFixture<FooterSevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
