import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SyncRoutingModule } from './sync-routing.module';
import { SyncComponent } from './sync/sync.component';
import { SyncService } from './sync.service';


@NgModule({
  declarations: [
    SyncComponent
  ],
  imports: [
    CommonModule,
    SyncRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [SyncService]
})
export class SyncModule { }
