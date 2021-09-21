import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'aq', loadChildren: () => import('./aq/aq.module').then((m) => m.AqModule) },
  { path: '', loadChildren: () => import('./sync/sync.module').then((m) => m.SyncModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
