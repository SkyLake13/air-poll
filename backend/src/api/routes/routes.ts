import express from 'express';
import { latest } from './latest';

const routes = express.Router();

routes.use('/latest', latest);

export { routes }