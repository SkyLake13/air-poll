import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyncComponent } from './sync/sync.component';

const routes: Routes = [
  { path: '', component: SyncComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyncRoutingModule { }
