import { Inject, Injectable } from '@angular/core';
import { AirPollClient, AIRPOLL_CLIENT } from '../air-poll';

@Injectable()
export class SyncService {
  constructor(
    @Inject(AIRPOLL_CLIENT) 
    private readonly airPollClient: AirPollClient
  ) { }

  public synchronize() {
    return this.airPollClient.synchronize();
  }
}
