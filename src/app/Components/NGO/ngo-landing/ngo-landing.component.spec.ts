import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGOLandingComponent } from './ngo-landing.component';

describe('NGOLandingComponent', () => {
  let component: NGOLandingComponent;
  let fixture: ComponentFixture<NGOLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGOLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGOLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
