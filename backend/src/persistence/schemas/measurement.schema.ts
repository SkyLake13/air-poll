import { Schema } from "mongoose";
import { Coordinates, Measurement } from "../entities/aq.entity";

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


const coordSchema = new Schema<Coordinates>({
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }
});

export { measurementSchema, coordSchema }