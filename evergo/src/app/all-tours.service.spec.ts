import { TestBed } from '@angular/core/testing';

import { AllToursService } from './all-tours.service';

describe('AllToursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllToursService = TestBed.get(AllToursService);
    expect(service).toBeTruthy();
  });
});
