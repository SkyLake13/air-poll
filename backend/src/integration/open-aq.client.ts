import { AxiosInstance } from 'axios';
import { OpenAqResponse } from './open-aq.response-object';

export class OpenAqClient {
    constructor(private readonly axios: AxiosInstance) { }

    public getLatestAqData() {
        const params = new URLSearchParams();
        params.set('limit', '100');
        params.set('page', '1');
        params.set('offset', '0');
        params.set('sort', 'desc');
        params.set('radius', '1000');
        params.set('order_by', 'lastUpdated');
        params.set('dumpRaw', 'false');


        return this.axios.get<OpenAqResponse>('latest', { params });
    }
}
