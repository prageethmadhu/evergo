import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTourComponent } from './selected-tour.component';

describe('SelectedTourComponent', () => {
  let component: SelectedTourComponent;
  let fixture: ComponentFixture<SelectedTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
