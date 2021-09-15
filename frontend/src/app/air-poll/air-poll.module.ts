import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIRPOLL_CLIENT } from './injection-token';
import { AirPollClientService } from './service/air-poll-client.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: AIRPOLL_CLIENT,
      useClass: AirPollClientService
    }
  ]
})
export class AirPollModule { }
