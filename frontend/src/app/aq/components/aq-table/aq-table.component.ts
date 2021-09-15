import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aq-table',
  templateUrl: './aq-table.component.html',
  styleUrls: ['./aq-table.component.scss']
})
export class AqTableComponent {

  public dataSource = [];
  public columns = ['location', 'city', 'country', 'particulate-matter', 'date'];

  public click(row: unknown) {

  }
}
