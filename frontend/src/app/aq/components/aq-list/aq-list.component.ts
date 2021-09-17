import { Component, OnInit } from '@angular/core';

import { AirQualityModel } from '../../interfaces';
import { AqListService } from '../../services/aq-list/aq-list.service';

const limit = 20;
@Component({
  selector: 'app-aq-list',
  templateUrl: './aq-list.component.html',
  styleUrls: ['./aq-list.component.scss']
})
export class ListComponent implements OnInit {
  public aqData: AirQualityModel[] = [];

  constructor(private readonly aqListService: AqListService) { }

  public ngOnInit(): void {
    this.aqListService.getAirQualityData(this.page, limit)
      .subscribe((aqData) => {
        this.aqData = aqData;
      });
  }

  private page = 2;
}
