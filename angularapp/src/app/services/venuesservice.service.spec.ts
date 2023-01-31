import { TestBed } from '@angular/core/testing';

import { VenuesserviceService } from './venuesservice.service';

describe('VenuesserviceService', () => {
  let service: VenuesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenuesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
