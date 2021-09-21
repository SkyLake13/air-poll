import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { AirQualityModel } from '../../interfaces';
import { AqListService } from '../../services/aq-list/aq-list.service';

const limit = 50;
@Component({
  selector: 'app-aq-list',
  templateUrl: './aq-list.component.html',
  styleUrls: ['./aq-list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
  public aqData: AirQualityModel[] = [];
  private intersection: IntersectionObserver;
  private isIntersecting = new Subject<boolean>();

  @ViewChild('bottom')
  public bottom!: ElementRef;

  constructor(private readonly aqListService: AqListService) {
    this.intersection = new IntersectionObserver((entries) => {
          const firstEntry = entries[0];
          this.isIntersecting.next(firstEntry.isIntersecting);
      },
      { threshold: 0 });
   }

  public ngOnInit(): void {
    this.isIntersecting.subscribe((is) => {
      console.log('intersecting', is);
      if(is) {
        this.page = this.page + 1;
        this.aqListService.getAirQualityData(this.page, limit)
          .subscribe((aqData) => {
            this.aqData = [...this.aqData, ...aqData];
          });
      }
      
    });
  }

  public ngAfterViewInit() {
    this.intersection.observe(this.bottom.nativeElement);
  }

  public ngOnDestroy() {
    this.intersection.disconnect();
  }

  public trackBy(i: number) {
    return i;
  }

  private page = 0;
}
