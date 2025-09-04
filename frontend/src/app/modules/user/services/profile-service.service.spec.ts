import { TestBed } from '@angular/core/testing';

import { PatientService } from './profile-service.service';

describe('ProfileServiceService', () => {
  let service: PatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
