import { TestBed, inject } from '@angular/core/testing';

import { MarketApiService } from './market-api.service';

describe('MarketApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketApiService]
    });
  });

  it('should be created', inject([MarketApiService], (service: MarketApiService) => {
    expect(service).toBeTruthy();
  }));
});
