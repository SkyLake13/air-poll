import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AqRoutingModule } from './aq-routing.module';
import { ListComponent } from './components/aq-list/aq-list.component';
import { AirPollModule } from '../air-poll';
import { AqListService } from './services/aq-list/aq-list.service';
import { AqTableComponent } from './components/aq-table/aq-table.component';
import { AqFilterComponent } from './components/aq-filter/aq-filter.component';


const MaterialModules = [
  MatTableModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule
];

@NgModule({
  declarations: [
    ListComponent,
    AqTableComponent,
    AqFilterComponent
  ],
  imports: [
    CommonModule,
    AqRoutingModule,
    AirPollModule,
    ...MaterialModules
  ],
  providers: [AqListService]
})
export class AqModule { }
