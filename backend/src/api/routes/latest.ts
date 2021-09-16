import express from "express";
import { getAirQ } from "../providers/db-service.provider";

const latest = express.Router();

latest.get('', async (req, res, next) => {
    const queryParams = req.query;

    try {
        const page = parseInt(queryParams.page as string);
        const count = parseInt(queryParams.count as string);
    
        const airQualityData = await getAirQ(page, count);

        res.status(200).send(airQualityData);
    } catch(err) {
        next(err);
    }
});

export { latest };

