import { Injectable, Inject } from '@angular/core';
import { AirPollClient } from '../../../air-poll/air-poll-client.interface';
import { AIRPOLL_CLIENT } from '../../../air-poll/injection-token';

@Injectable()
export class AqListService {
  constructor(
    @Inject(AIRPOLL_CLIENT) 
    private readonly airPollClient: AirPollClient
  ) { }
}
