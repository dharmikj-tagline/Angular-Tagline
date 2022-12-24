import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHrSalesComponent } from './footer-hr-sales.component';

describe('FooterHrSalesComponent', () => {
  let component: FooterHrSalesComponent;
  let fixture: ComponentFixture<FooterHrSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterHrSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterHrSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
