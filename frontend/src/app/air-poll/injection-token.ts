import { InjectionToken } from "@angular/core";
import { AirPollClient } from "./air-poll-client.interface";

export const AIRPOLL_CLIENT 
                    = new InjectionToken<AirPollClient>('Service to communicate with AirPoll backend');