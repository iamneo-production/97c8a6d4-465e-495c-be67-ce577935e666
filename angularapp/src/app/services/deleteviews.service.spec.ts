import { TestBed } from '@angular/core/testing';

import { DeleteviewsService } from './deleteviews.service';

describe('DeleteviewsService', () => {
  let service: DeleteviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
