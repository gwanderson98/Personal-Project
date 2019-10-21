import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsYearsComponent } from './cards-years.component';

describe('CardsYearsComponent', () => {
  let component: CardsYearsComponent;
  let fixture: ComponentFixture<CardsYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
