import { TestBed } from '@angular/core/testing';

import { DeletereviewsService } from './deletereviews.service';

describe('DeletereviewsService', () => {
  let service: DeletereviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletereviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
