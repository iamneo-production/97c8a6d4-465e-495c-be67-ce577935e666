import { TestBed } from '@angular/core/testing';

import { DeleteAddonService } from './delete-addon.service';

describe('DeleteAddonService', () => {
  let service: DeleteAddonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteAddonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
