import { TestBed } from '@angular/core/testing';

import { AssignDisountToProductService } from './assign-disount-to-product.service';

describe('AssignDisountToProductService', () => {
  let service: AssignDisountToProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignDisountToProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
