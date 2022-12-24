import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLastComponent } from './footer-last.component';

describe('FooterLastComponent', () => {
  let component: FooterLastComponent;
  let fixture: ComponentFixture<FooterLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
