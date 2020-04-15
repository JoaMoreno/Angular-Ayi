import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewViewChildComponent } from './view-view-child.component';

describe('ViewViewChildComponent', () => {
  let component: ViewViewChildComponent;
  let fixture: ComponentFixture<ViewViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
