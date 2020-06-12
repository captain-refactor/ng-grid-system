import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGridSystemComponent } from './ng-grid-system.component';

describe('NgGridSystemComponent', () => {
  let component: NgGridSystemComponent;
  let fixture: ComponentFixture<NgGridSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGridSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGridSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
