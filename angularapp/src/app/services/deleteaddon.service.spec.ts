import { TestBed } from '@angular/core/testing';

import { DeleteaddonService } from './deleteaddon.service';

describe('DeleteaddonService', () => {
  let service: DeleteaddonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteaddonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
