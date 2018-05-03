import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPage1Component } from './main-page-1.component';

describe('MainPage1Component', () => {
  let component: MainPage1Component;
  let fixture: ComponentFixture<MainPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
