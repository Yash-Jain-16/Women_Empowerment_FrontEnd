import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STEPStatusComponent } from './step-status.component';

describe('STEPStatusComponent', () => {
  let component: STEPStatusComponent;
  let fixture: ComponentFixture<STEPStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STEPStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STEPStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
