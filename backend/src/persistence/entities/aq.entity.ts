export interface AqEntity {
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