import express from 'express';
import { latest } from './latest';
import { synchronize } from './sync';

const routes = express.Router();

routes.use('/latest', latest);
routes.use('/sync', synchronize);

export { routes }