import express from 'express';
import helmet from 'helmet';

import { routes } from './routes';
import { errorLogger } from './middlewares/error-handlers';

const app = express();

// Pre Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

// Post Middlewares
app.use(errorLogger);

export { app };
