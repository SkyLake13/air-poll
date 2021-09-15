import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AqRoutingModule } from './aq-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    AqRoutingModule
  ]
})
export class AqModule { }
