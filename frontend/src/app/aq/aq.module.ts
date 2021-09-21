import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AqRoutingModule } from './aq-routing.module';
import { ListComponent } from './components/aq-list/aq-list.component';
import { AqListService } from './services/aq-list/aq-list.service';
import { AqFilterComponent } from './components/aq-filter/aq-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter-pipe/filter.pipe';


const MaterialModules = [
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    ListComponent,
    AqFilterComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    AqRoutingModule,
    FormsModule, ReactiveFormsModule,
    ...MaterialModules
  ],
  providers: [AqListService]
})
export class AqModule { }
