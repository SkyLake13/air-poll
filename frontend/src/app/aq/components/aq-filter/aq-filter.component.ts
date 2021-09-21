import { Component, EventEmitter, 
  Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aq-filter',
  templateUrl: './aq-filter.component.html',
  styleUrls: ['./aq-filter.component.scss']
})
export class AqFilterComponent implements OnInit, OnDestroy {
  @Input()
  public countries: string[] = [];

  @Input()
  public cities: string[] = [];

  @Output()
  public filterChange = new EventEmitter();

  public filterForm: FormGroup;

  constructor(formbuilder: FormBuilder) {
    this.filterForm = formbuilder.group({
      'city': '',
      'country': ''
    });
  }

  public ngOnInit() {
    this.subscription = this.filterForm.valueChanges
      .subscribe((form) => this.filterChange.emit(form));
  }

  public ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private subscription?: Subscription;
}
