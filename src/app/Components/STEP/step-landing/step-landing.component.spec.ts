import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STEPLandingComponent } from './step-landing.component';

describe('STEPLandingComponent', () => {
  let component: STEPLandingComponent;
  let fixture: ComponentFixture<STEPLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STEPLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STEPLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
