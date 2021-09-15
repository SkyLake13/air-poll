import { Schema } from "mongoose";
import { MeasurementEntity } from "../entities/measurement.entity";

const measurementSchema = new Schema<MeasurementEntity>({
    parameter: {
        type: String
    },
    value: {
        type: Number
    },
    lastUpdated: {
        type: Date
    },
    unit: {
        type: String
    }
});

export { measurementSchema }