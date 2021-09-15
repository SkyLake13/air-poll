export interface OpenAqResponse {
    meta: Meta;
    results: Result[];
}

interface Meta {
    name: string;
    license: string;
    website: string;
    page: number;
    limit: number;
    found: number;
}

interface Coordinates {
    latitude: number;
    longitude: number;
}

interface Measurement {
    parameter: string;
    value: number;
    lastUpdated: Date;
    unit: string;
}

interface Result {
    location: string;
    city?: any;
    country: string;
    coordinates: Coordinates;
    measurements: Measurement[];
}



