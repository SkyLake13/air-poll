import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AIRPOLL_CLIENT, API_BASE_URL } from './injection-token';
import { AirPollClientService } from './service/air-poll-client.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: AIRPOLL_CLIENT,
      useClass: AirPollClientService
    }
  ]
})
export class AirPollModule {
  public static forRoot(apiBaseUrl: string): ModuleWithProviders<AirPollModule> {
    return {
      ngModule: AirPollModule,
      providers: [
        {
          provide: API_BASE_URL,
          useValue: apiBaseUrl
        },
        {
          provide: AIRPOLL_CLIENT,
          useClass: AirPollClientService
        }
      ]
    }
  }
}
