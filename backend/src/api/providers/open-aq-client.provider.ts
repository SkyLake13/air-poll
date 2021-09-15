import axios from "axios";
import { OpenAqClient } from "../../integration/open-aq.client";

const axiosInstance = axios.create({
    baseURL: 'https://docs.openaq.org/v2/',
    headers: {
        'content-type': 'application/json'
    }
});

const openAqClient = new OpenAqClient(axiosInstance);

export { openAqClient };
