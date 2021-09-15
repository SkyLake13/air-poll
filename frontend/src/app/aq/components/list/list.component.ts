import { Component, OnInit } from '@angular/core';
import { AqListService } from '../../services/aq-list/aq-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(private readonly aqListService: AqListService) { }

  ngOnInit(): void {
  }

}
