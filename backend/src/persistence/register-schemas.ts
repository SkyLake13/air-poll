import { Connection } from "mongoose";
import { AqEntity } from "./entities/aq.entity";
import { aqSchema } from "./schemas/aq.schema";

function registerSchemas(connection: Connection) {
    const AqModel = connection.model<AqEntity>('airquality', aqSchema, 'air_quality');

    return { AqModel };
}

export { registerSchemas }