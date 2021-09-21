export interface AirQualityModel {
    id: string;
    location: string;
    city: string;
    country: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    measurements: MeasurementModel[];
    date: Date | null;
}

interface MeasurementModel {
    parameter: string;
    value: number;
    unit: string;
}

export interface Sort { property: string, order: 'asc' | 'desc' | null }