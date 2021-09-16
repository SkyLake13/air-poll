
import { synchronize } from "../../domain";
import { models } from "./db-models.provider";
import { axiosInstance } from "./http-client.provider";

const sync = synchronize(axiosInstance, models.AqModel);

export { sync }