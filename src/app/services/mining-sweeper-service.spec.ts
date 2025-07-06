import { TestBed } from '@angular/core/testing';

import { MiningSweeperService } from './mining-sweeper-service';

describe('MiningSweeperService', () => {
  let service: MiningSweeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiningSweeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
