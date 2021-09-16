import { createDbConnection, registerSchemas } from '../../persistence';
import { DB_CONNECTION } from '../../configuration';
import { getAirQuality } from '../../domain';

const connection = createDbConnection(DB_CONNECTION);
const models = registerSchemas(connection);
const getAirQ = getAirQuality(models.AqModel);

export { getAirQ }