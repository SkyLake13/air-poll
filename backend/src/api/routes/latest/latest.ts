import express from "express";
import { models } from "../../providers/db-models.provider";

import { getAq } from '../../providers/open-aq-client.provider';

const latest = express.Router();

latest.get('', async (req, res) => {
    const data = await getAq();
    const aq = data.data.results;
    await models.AqModel.insertMany([...aq])
    const abc = await models.AqModel.find().lean();
    
    res.status(200).send(abc);

});

export { latest };