import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AqRoutingModule } from './aq-routing.module';
import { ListComponent } from './components/list/list.component';
import { AirPollModule } from '../air-poll/air-poll.module';
import { AqListService } from './services/aq-list/aq-list.service';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    AqRoutingModule,
    AirPollModule
  ],
  providers: [AqListService]
})
export class AqModule { }
