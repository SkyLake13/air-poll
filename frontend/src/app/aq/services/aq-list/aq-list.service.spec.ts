import { TestBed } from '@angular/core/testing';

import { AqListService } from './aq-list.service';

describe('AqListService', () => {
  let service: AqListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AqListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
