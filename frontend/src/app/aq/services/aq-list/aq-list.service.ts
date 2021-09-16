import { Injectable, Inject } from '@angular/core';
import { AirPollClient, AIRPOLL_CLIENT } from '../../../air-poll';

@Injectable()
export class AqListService {
  constructor(
    @Inject(AIRPOLL_CLIENT) 
    private readonly airPollClient: AirPollClient
  ) { }
}