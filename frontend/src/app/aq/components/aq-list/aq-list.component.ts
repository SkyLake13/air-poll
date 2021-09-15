import { Component, OnInit } from '@angular/core';
import { AqListService } from '../../services/aq-list/aq-list.service';

@Component({
  selector: 'app-aq-list',
  templateUrl: './aq-list.component.html',
  styleUrls: ['./aq-list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(private readonly aqListService: AqListService) { }

  ngOnInit(): void {
  }

}
