import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsTravelComponent } from './excursions-travel.component';

describe('ExcursionsTravelComponent', () => {
  let component: ExcursionsTravelComponent;
  let fixture: ComponentFixture<ExcursionsTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcursionsTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcursionsTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
