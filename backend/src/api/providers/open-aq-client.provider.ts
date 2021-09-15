import axios from "axios";
import { OPEN_AQ_BASE_URL } from "../../configuration";
import { OpenAqClient } from "../../integration/open-aq.client";

const axiosInstance = axios.create({
    baseURL: OPEN_AQ_BASE_URL,
    headers: {
        'content-type': 'application/json'
    }
});

const openAqClient = new OpenAqClient(axiosInstance);

export { openAqClient };
