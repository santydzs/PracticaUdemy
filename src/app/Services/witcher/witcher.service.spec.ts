import { TestBed } from '@angular/core/testing';

import { WitcherService } from './witcher.service';

describe('WitcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WitcherService = TestBed.get(WitcherService);
    expect(service).toBeTruthy();
  });
});
