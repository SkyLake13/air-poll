import { Model } from 'mongoose';
import { AqEntity } from "../persistence/entities/aq.entity";

function getAirQuality(model: Model<AqEntity>) {
    return async (page: number, count: number) => {
        const offset = (page - 1) * count;

        const query = model.find();
        const skip = query.skip(offset);
        const limit = skip.limit(count);
        const lean = limit.lean();

        const result = await lean;

        return result;
    }
}

export { getAirQuality }