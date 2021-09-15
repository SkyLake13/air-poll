import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqFilterComponent } from './aq-filter.component';

describe('AqFilterComponent', () => {
  let component: AqFilterComponent;
  let fixture: ComponentFixture<AqFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AqFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AqFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
