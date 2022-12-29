import { TestBed } from '@angular/core/testing';

import { WhytaglineService } from './whytagline.service';

describe('WhytaglineService', () => {
  let service: WhytaglineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhytaglineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
