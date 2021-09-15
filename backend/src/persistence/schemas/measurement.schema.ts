import { Schema } from "mongoose";
import { Measurement } from "../entities/aq.entity";

const measurementSchema = new Schema<Measurement>({
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