import { TestBed } from '@angular/core/testing';

import { AddOnsServiceService } from './add-ons-service.service';

describe('AddOnsServiceService', () => {
  let service: AddOnsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddOnsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
