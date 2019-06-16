import { TestBed } from '@angular/core/testing';

import { TourMiniDetailService } from './tour-mini-detail.service';

describe('TourMiniDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TourMiniDetailService = TestBed.get(TourMiniDetailService);
    expect(service).toBeTruthy();
  });
});
