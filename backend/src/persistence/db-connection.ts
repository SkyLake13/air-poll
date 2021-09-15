import { createConnection } from 'mongoose';

export function createDbConnection(connectionString: string) {
    const dbConnection = createConnection(connectionString);

    return dbConnection;
}
