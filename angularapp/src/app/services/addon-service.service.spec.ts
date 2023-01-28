import { TestBed } from '@angular/core/testing';

import { AddonServiceService } from './addon-service.service';

describe('AddonServiceService', () => {
  let service: AddonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
