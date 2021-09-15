import { Request, Response, NextFunction } from "express";

const logger = console;

export function errorLogger(err: Error, req: Request, res: Response, next: NextFunction) {
    err && logger.error(err);

    return next(err);
}
