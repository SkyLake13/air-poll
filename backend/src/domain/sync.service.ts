import { AxiosInstance } from "axios";
import { Model } from "mongoose";
import { getOpenAqDataFetcher } from "../integration/open-aq.client";
import { AqEntity } from "../persistence/entities/aq.entity";

const perPageLimit = 100;
const totalPages = 100;

function synchronize(axios: AxiosInstance, model: Model<AqEntity>) {
    const openAqDataFetcher = getOpenAqDataFetcher(axios);

    // Inner function to get Open Aq data by page number
    const getOpenAqDataByPage = async (page: number, limit: number) => {
        const openAqResponse = await openAqDataFetcher(page, limit);
        let responseData = openAqResponse.data;
    
        if (responseData && responseData.results && responseData.results.length > 0) {
            const aqData = responseData.results; //.filter((r) => r.city !== null);
    
            return aqData;
        }
    }

    // Inner function to get first 100 pages of Open Aq data
    const getAllPages = async () => {
        let result: any[] = [];

        for (let page = 1; page <= totalPages; page++) {
            const data = await getOpenAqDataByPage(page, perPageLimit);
            if(data) {
                result = [...result, ...data];
            }
        }
        return result;
    }

    // Save Open Aq data to database
    const saveToDb = async () => {
        const result = await getAllPages();

        if (result.length > 0) {
            // Clear existing data
            await model.deleteMany();
            // Insert new data
            await model.insertMany(result);
        }
    }

    return saveToDb;
}



export { synchronize }