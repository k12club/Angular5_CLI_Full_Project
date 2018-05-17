import { TestBed, inject } from '@angular/core/testing';

import { DataProfileService } from './data-profile.service';

describe('DataProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataProfileService]
    });
  });

  it('should be created', inject([DataProfileService], (service: DataProfileService) => {
    expect(service).toBeTruthy();
  }));
});
