import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourMainComponent } from './tour-main.component';

describe('TourMainComponent', () => {
  let component: TourMainComponent;
  let fixture: ComponentFixture<TourMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
