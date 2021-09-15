import { TestBed } from '@angular/core/testing';

import { AirpollClientService } from './airpoll-client.service';

describe('AirpollClientService', () => {
  let service: AirpollClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirpollClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
