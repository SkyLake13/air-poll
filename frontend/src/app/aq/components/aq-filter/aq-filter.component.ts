import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aq-filter',
  templateUrl: './aq-filter.component.html',
  styleUrls: ['./aq-filter.component.scss']
})
export class AqFilterComponent {
  @Input()
  public countries: string[] = [];

  @Input()
  public cities: string[] = [];
}
