import { TestBed } from '@angular/core/testing';

import { AdminReportsService } from './admin-reports.service';

describe('AdminReportsService', () => {
  let service: AdminReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
