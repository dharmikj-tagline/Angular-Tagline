import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyBackendComponent } from './technology-backend.component';

describe('TechnologyBackendComponent', () => {
  let component: TechnologyBackendComponent;
  let fixture: ComponentFixture<TechnologyBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyBackendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
