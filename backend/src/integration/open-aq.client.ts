import { AxiosInstance } from 'axios';
import { OpenAqResponse } from './open-aq.response-object';

function getOpenAqDataFetcher(axios: AxiosInstance) {
    return (page: number, limit: number) => {
        const offset = (page - 1)* limit;

        const params = new URLSearchParams();
        params.set('limit', String(limit));
        params.set('page', String(page));
        params.set('offset', String(offset));
        params.set('sort', 'desc');
        params.set('radius', '1000');
        params.set('order_by', 'lastUpdated');
        params.set('dumpRaw', 'false');
    
    
        return axios.get<OpenAqResponse>('latest', { params });
    }
}

export { getOpenAqDataFetcher }