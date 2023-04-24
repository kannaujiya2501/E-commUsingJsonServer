import { TestBed } from '@angular/core/testing';

import { svendorService } from './svendor.service';

describe('SvendorService', () => {
  let service: svendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(svendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
