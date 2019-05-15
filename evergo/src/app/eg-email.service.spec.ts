import { TestBed } from '@angular/core/testing';

import { EgEmailService } from './eg-email.service';

describe('EgEmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EgEmailService = TestBed.get(EgEmailService);
    expect(service).toBeTruthy();
  });
});
