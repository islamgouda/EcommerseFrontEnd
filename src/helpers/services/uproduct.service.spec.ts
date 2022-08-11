import { TestBed } from '@angular/core/testing';

import { UProductService } from './uproduct.service';

describe('UProductService', () => {
  let service: UProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
