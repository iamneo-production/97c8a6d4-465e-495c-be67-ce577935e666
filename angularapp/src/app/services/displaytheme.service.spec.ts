import { TestBed } from '@angular/core/testing';

import { DisplaythemeService } from './displaytheme.service';

describe('DisplaythemeService', () => {
  let service: DisplaythemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplaythemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
