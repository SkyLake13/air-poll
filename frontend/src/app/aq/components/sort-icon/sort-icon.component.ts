import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sort-icon',
  templateUrl: './sort-icon.component.html',
  styleUrls: ['./sort-icon.component.scss']
})
export class SortIconComponent {
  @Input()
  order?: 'asc' | 'desc' | null;
}
