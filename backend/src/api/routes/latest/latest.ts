import express from "express";

const latest = express.Router();

latest.get('', (req, res) => {
    res.status(200).send('Backend is up!');
});

export { latest };