import { Schema } from "mongoose";
import { AqEntity } from "../entities/aq.entity";
import { coordSchema, measurementSchema } from "./measurement.schema";

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
        type: coordSchema
    },
    measurements: {
        type: [measurementSchema]
    }
});

export { aqSchema }