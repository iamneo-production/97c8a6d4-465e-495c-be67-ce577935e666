import { TestBed } from '@angular/core/testing';

import { ThemedisplayService } from './themedisplay.service';

describe('ThemedisplayService', () => {
  let service: ThemedisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemedisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
