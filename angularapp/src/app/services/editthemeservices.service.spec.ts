import { TestBed } from '@angular/core/testing';

import { EditthemeservicesService } from './editthemeservices.service';

describe('EditthemeservicesService', () => {
  let service: EditthemeservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditthemeservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
