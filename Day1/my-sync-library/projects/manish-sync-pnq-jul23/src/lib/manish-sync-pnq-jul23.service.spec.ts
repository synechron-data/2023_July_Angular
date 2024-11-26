import { TestBed } from '@angular/core/testing';

import { ManishSyncPnqJul23Service } from './manish-sync-pnq-jul23.service';

describe('ManishSyncPnqJul23Service', () => {
  let service: ManishSyncPnqJul23Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManishSyncPnqJul23Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
