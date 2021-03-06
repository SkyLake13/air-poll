import { AfterViewInit, Component, ElementRef, 
  OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, mergeMap, tap } from 'rxjs/operators';

import { AirQualityModel, Sort } from '../../interfaces';
import { AqListService } from '../../services/aq-list/aq-list.service';

const limit = 30;
@Component({
  selector: 'app-aq-list',
  templateUrl: './aq-list.component.html',
  styleUrls: ['./aq-list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
  public aqData: AirQualityModel[] = [];
  public filter?: Filter;

  public sort?: Sort;

  public get cities(): string[] {
    return [...new Set(this.aqData.map((d) => d.city).sort())];
  }

  public get countries(): string[] {
    return [...new Set(this.aqData.map((d) => d.country).sort())];
  }
  
  @ViewChild('bottom')
  public bottom!: ElementRef;

  constructor(
    private readonly aqListService: AqListService,
    private readonly renderer: Renderer2
  ) {
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

  public filterChange(filter: Filter) {
    this.filter = filter;

    if(this.filter.city !== '' && this.filter.country !== '') {
      this.showElement(this.bottom);
    } else {
      this.hideElement(this.bottom);
    }
  }

  public sortBy(property: string) {
    if(this.sort && this.sort.property === property) {
      if(this.sort.order === 'asc') {
        this.sort = {
          property,
          order: 'desc'
        };
      } else {
        this.sort = {
          property,
          order: 'asc'
        }
      }
    } else {
      this.sort = {
        property,
        order: 'asc'
      }
    }
  }

  public order(property: string): 'asc' | 'desc' | null {
    if(this.sort && this.sort.property === property) {
      return this.sort.order;
    } else {
      return null;
    }
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

  private hideElement(element: ElementRef) {
    const el = element.nativeElement;
    this.renderer.setStyle(el, 'display', 'none');
  }

  private showElement(element: ElementRef) {
    const el = element.nativeElement;
    this.renderer.setStyle(el, 'display', 'flex');
  }

  private intersection: IntersectionObserver;
  private isIntersecting = new Subject<boolean>();
  private page = 0;
}

export interface Filter {
  city: string, 
  country: string
}
