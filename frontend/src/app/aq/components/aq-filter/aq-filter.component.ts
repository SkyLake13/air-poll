import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aq-filter',
  templateUrl: './aq-filter.component.html',
  styleUrls: ['./aq-filter.component.scss']
})
export class AqFilterComponent {
  public countries = [];

  public cities = [];
}
