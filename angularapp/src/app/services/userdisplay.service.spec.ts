import { TestBed } from '@angular/core/testing';

import { UserdisplayService } from './userdisplay.service';

describe('UserdisplayService', () => {
  let service: UserdisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
