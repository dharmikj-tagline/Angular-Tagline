import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWordsComponent } from './client-words.component';

describe('ClientWordsComponent', () => {
  let component: ClientWordsComponent;
  let fixture: ComponentFixture<ClientWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientWordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
