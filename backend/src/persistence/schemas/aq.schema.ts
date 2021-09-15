import { Schema } from "mongoose";
import { AqEntity } from "../entities/aq.entity";
import { measurementSchema } from "./measurement.schema";

const aqSchema = new Schema<AqEntity>({
    location: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    coordinates: {
        latitude: {
            type: Number
        },
        longitude: {
            type: Number
        }
    },
    measurements: {
        type: [measurementSchema]
    }
});

export { aqSchema }