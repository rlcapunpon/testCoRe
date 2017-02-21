/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DevToolComponent } from './dev-tool.component';

describe('DevToolComponent', () => {
  let component: DevToolComponent;
  let fixture: ComponentFixture<DevToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
