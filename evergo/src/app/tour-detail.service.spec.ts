import { TestBed } from '@angular/core/testing';

import { TourDetailService } from './tour-detail.service';

describe('TourDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TourDetailService = TestBed.get(TourDetailService);
    expect(service).toBeTruthy();
  });
});
