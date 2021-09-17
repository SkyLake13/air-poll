import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';

import { AirQuality, Measurement } from '../../../air-poll/response-objects';
import { AirPollClient, AIRPOLL_CLIENT } from '../../../air-poll';
import { Observable } from 'rxjs';
import { AirQualityModel } from '../../interfaces';

@Injectable()
export class AqListService {
  constructor(
    @Inject(AIRPOLL_CLIENT) 
    private readonly airPollClient: AirPollClient
  ) { }

  public getAirQualityData(page: number, limit: number): Observable<AirQualityModel[]> {
    return this.airPollClient.getData(page, limit)
            .pipe((map((d) => d.map(airQualityMapper))));
  }
}

function airQualityMapper(airQuality: AirQuality): AirQualityModel {
  return {
    location: airQuality.location,
    city: airQuality.city,
    country: airQuality.country,
    coordinates: airQuality.coordinates,
    date: airQuality.measurements.length > 0 ? airQuality.measurements[0].lastUpdated : null,
    measurements: airQuality.measurements.map(measurementMapper)
  }
}

function measurementMapper(measurement: Measurement) {
  return {
    parameter: measurement.parameter,
    value: measurement.value,
    unit: measurement.unit
  }
}