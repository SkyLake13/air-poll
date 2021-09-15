import { MeasurementEntity } from "./measurement.entity";

export interface AqEntity {
    location: string;
    city: string;
    country: string;
    coordinates: CoordinatesEntity;
    measurements: MeasurementEntity[];
}

export interface CoordinatesEntity {
    latitude: number;
    longitude: number;
}
