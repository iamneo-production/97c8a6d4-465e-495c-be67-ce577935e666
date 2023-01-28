import { TestBed } from '@angular/core/testing';

import { EditreviewsService } from './editreviews.service';

describe('EditreviewsService', () => {
  let service: EditreviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditreviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
