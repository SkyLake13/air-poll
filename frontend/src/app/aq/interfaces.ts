export interface AirQualityModel {
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