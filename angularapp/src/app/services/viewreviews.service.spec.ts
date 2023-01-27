import { TestBed } from '@angular/core/testing';

import { ViewreviewsService } from './viewreviews.service';

describe('ViewreviewsService', () => {
  let service: ViewreviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewreviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
