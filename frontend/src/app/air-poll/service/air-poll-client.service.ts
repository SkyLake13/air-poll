import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AirPollClient } from '../air-poll-client.interface';
import { API_BASE_URL } from '../injection-token';
import { AirQuality } from '../response-objects';

const pathForLatest = 'latest';

@Injectable()
export class AirPollClientService implements AirPollClient {
  constructor(
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string,
    private readonly httpClient: HttpClient
  ) { }

  public getData(page: number, limit: number) {
    const url = concatUrl(this.apiBaseUrl, pathForLatest);
    const params = new HttpParams().set('page', page).set('count', limit);

    return this.httpClient.get<AirQuality[]>(url, { params });
  }
}

function concatUrl(baseUrl: string, path: string) {
  return `${baseUrl}${path}`
}
