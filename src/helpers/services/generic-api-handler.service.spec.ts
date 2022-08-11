import { TestBed } from '@angular/core/testing';

import { GenericApiHandlerService } from './generic-api-handler.service';

describe('GenericApiHandlerService', () => {
  let service: GenericApiHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericApiHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
