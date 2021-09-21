import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AqRoutingModule } from './aq-routing.module';
import { ListComponent } from './components/aq-list/aq-list.component';
import { AqListService } from './services/aq-list/aq-list.service';
import { AqFilterComponent } from './components/aq-filter/aq-filter.component';


const MaterialModules = [
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule
];

@NgModule({
  declarations: [
    ListComponent,
    AqFilterComponent
  ],
  imports: [
    CommonModule,
    AqRoutingModule,
    ...MaterialModules
  ],
  providers: [AqListService]
})
export class AqModule { }
