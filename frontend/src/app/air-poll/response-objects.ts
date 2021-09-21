export interface AirQuality {
    _id: string;
    location: string;
    city: string;
    country: string;
    coordinates: Coordinates;
    measurements: Measurement[];
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Measurement {
    parameter: string;
    value: number;
    lastUpdated: Date;
    unit: string;
}