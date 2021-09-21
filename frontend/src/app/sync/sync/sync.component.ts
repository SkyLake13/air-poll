import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SyncService } from '../sync.service';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.scss']
})
export class SyncComponent implements OnDestroy {
  public syncRequested = false;

  constructor(private readonly syncService: SyncService) { }

  public synchronize() {
    this.subscription = this.syncService.synchronize()
      .subscribe(() => this.syncRequested = true);
  }

  public ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private subscription?: Subscription;
}
