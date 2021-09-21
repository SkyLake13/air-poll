import { Observable } from "rxjs";
import { AirQuality } from "./response-objects";

export interface AirPollClient {
    getData(page: number, limit: number): Observable<AirQuality[]>;
    synchronize(): Observable<void>;
}