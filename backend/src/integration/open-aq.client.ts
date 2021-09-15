import { AxiosInstance } from 'axios';
import { OpenAqResponse } from './open-aq.response-object';

function getAqData(axios: AxiosInstance) {
    return () => {
        const params = new URLSearchParams();
        params.set('limit', '100');
        params.set('page', '1');
        params.set('offset', '0');
        params.set('sort', 'desc');
        params.set('radius', '1000');
        params.set('order_by', 'lastUpdated');
        params.set('dumpRaw', 'false');
    
    
        return axios.get<OpenAqResponse>('latest', { params });
    }
}

export { getAqData }