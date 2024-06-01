import { TestBed } from '@angular/core/testing';

import { PacksServiceService } from './packs.service.service';

describe('PacksServiceService', () => {
  let service: PacksServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacksServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
