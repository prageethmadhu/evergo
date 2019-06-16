import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaldivesTravelComponent } from './maldives-travel.component';

describe('MaldivesTravelComponent', () => {
  let component: MaldivesTravelComponent;
  let fixture: ComponentFixture<MaldivesTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaldivesTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaldivesTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
