import { TestBed } from '@angular/core/testing';

import { EditmenuService } from './editmenu.service';

describe('EditmenuService', () => {
  let service: EditmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
