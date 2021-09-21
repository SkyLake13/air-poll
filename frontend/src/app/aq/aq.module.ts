import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';

import { AqRoutingModule } from './aq-routing.module';
import { ListComponent } from './components/aq-list/aq-list.component';
import { AqListService } from './services/aq-list/aq-list.service';
import { AqFilterComponent } from './components/aq-filter/aq-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter-pipe/filter.pipe';
import { SortPipe } from './filter-pipe/sort.pipe';
import { SortIconComponent } from './components/sort-icon/sort-icon.component';


const MaterialModules = [
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatIconModule
];

@NgModule({
  declarations: [
    ListComponent,
    AqFilterComponent,
    FilterPipe,
    SortPipe,
    SortIconComponent
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
