import { createDbConnection, registerSchemas } from '../../persistence';
import { DB_CONNECTION } from '../../configuration';

const connection = createDbConnection(DB_CONNECTION);
const models = registerSchemas(connection);

export { models }