import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqTableComponent } from './aq-table.component';

describe('AqTableComponent', () => {
  let component: AqTableComponent;
  let fixture: ComponentFixture<AqTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AqTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AqTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
