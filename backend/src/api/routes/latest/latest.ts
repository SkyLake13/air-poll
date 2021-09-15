import express from "express";

import { openAqClient } from '../../providers/open-aq-client.provider';

const latest = express.Router();

latest.get('', async (req, res) => {
    const data = await openAqClient.getLatestAqData();
    res.status(200).send(data.data);
});

export { latest };