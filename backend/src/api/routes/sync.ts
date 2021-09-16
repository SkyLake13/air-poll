import express from "express";
import { sync } from "../providers/sync-service.provider";

const synchronize = express.Router();

synchronize.get('', (req, res) => {
    // Do not wait for the synchronization to get completed.
    sync().then(() => console.log('synchronization done.'));

    res.status(200).send({
        message: 'Synchronization is in progress. It shall take few mintues.',
        code: 200
    });
});

export { synchronize };