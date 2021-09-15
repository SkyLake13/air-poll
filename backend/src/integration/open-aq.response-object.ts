export interface OpenAqResponse {
    meta: Meta;
    results: Result[];
}

export interface Meta {
    name: string;
    license: string;
    website: string;
    page: number;
    limit: number;
    found: number;
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

export interface Result {
    location: string;
    city?: any;
    country: string;
    coordinates: Coordinates;
    measurements: Measurement[];
}



