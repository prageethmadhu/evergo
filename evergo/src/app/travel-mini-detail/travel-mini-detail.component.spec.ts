import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelMiniDetailComponent } from './travel-mini-detail.component';

describe('TravelMiniDetailComponent', () => {
  let component: TravelMiniDetailComponent;
  let fixture: ComponentFixture<TravelMiniDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelMiniDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelMiniDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
