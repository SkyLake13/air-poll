import { Injectable } from '@angular/core';
import { AirPollClient } from '../air-poll-client.interface';

@Injectable()
export class AirPollClientService implements AirPollClient {
  constructor() { }
}
