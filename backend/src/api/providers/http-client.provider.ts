import axios from "axios";
import { OPEN_AQ_BASE_URL } from "../../configuration";

const axiosInstance = axios.create({
    baseURL: OPEN_AQ_BASE_URL,
    headers: {
        'content-type': 'application/json'
    }
});

export { axiosInstance }