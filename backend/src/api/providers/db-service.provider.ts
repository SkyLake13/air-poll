import { getAirQuality } from '../../domain';
import { models } from './db-models.provider';

const getAirQ = getAirQuality(models.AqModel);

export { getAirQ }