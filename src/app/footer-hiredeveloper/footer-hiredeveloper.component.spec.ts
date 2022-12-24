import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHiredeveloperComponent } from './footer-hiredeveloper.component';

describe('FooterHiredeveloperComponent', () => {
  let component: FooterHiredeveloperComponent;
  let fixture: ComponentFixture<FooterHiredeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterHiredeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterHiredeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
