import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aq-table',
  templateUrl: './aq-table.component.html',
  styleUrls: ['./aq-table.component.scss']
})
export class AqTableComponent {
  @Input()
  public dataSource: any[] = [];

  public columns = ['location', 'city', 'country', 'measurements', 'date'];

  public click(row: unknown) {

  }
}
