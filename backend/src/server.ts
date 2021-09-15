
import http from 'http';
import { Express } from 'express';

import { PORT } from './configuration';

const createHttpServer = (app: Express) => {
    return http.createServer(app);
}

const start = (api: Express) => {
    const server = createHttpServer(api);

    return server.listen(PORT, () => {
        console.info(`Server is listening at port ${PORT}`);
    });
}

export { start };

