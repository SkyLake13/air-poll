import { createConnection } from 'mongoose';

export function createDbConnection(connectionString: string) {
    const dbConnection = createConnection(connectionString);

   /*  dbConnection.on('error', (error) => logger.error(error));
    dbConnection.once('open', () => logger.info('Connected to database')); */

    return dbConnection;
}
