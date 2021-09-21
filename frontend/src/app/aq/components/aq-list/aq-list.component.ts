import { AfterViewInit, Component, ElementRef, 
  OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, mergeMap, tap } from 'rxjs/operators';

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

  public get cities(): string[] {
    return [...new Set(this.aqData.map((d) => d.city).sort())];
  }

  public get countries(): string[] {
    return [...new Set(this.aqData.map((d) => d.country).sort())];
  }
  
  @ViewChild('bottom')
  public bottom!: ElementRef;

  constructor(private readonly aqListService: AqListService) {
    this.intersection = this.intersectionObserverFactory(this.isIntersecting);
  }

  public ngOnInit(): void {
    this.listenForIntersection();
  }

  public ngAfterViewInit() {
    this.intersection.observe(this.bottom.nativeElement);
  }

  public ngOnDestroy() {
    this.intersection.disconnect();
  }

  public trackBy(i: number, aq: AirQualityModel) {
    return aq.id;
  }

  private listenForIntersection() {
    this.isIntersecting
      .pipe(
        filter((intersecting) => intersecting),
        tap(() => this.incrementPage()),
        mergeMap(() => this.fetchData())
      ).subscribe((aqData) => {
        this.aqData = [...this.aqData, ...aqData];
      });
  }

  private intersectionObserverFactory(isIntersecting: Subject<boolean>) {
    return new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      isIntersecting.next(firstEntry.isIntersecting);
    }, { threshold: 0 });
  }

  private incrementPage() {
    this.page = this.page + 1;
  }

  private fetchData() {
    return this.aqListService.getAirQualityData(this.page, limit);
  }

  private intersection: IntersectionObserver;
  private isIntersecting = new Subject<boolean>();
  private page = 0;
}
