import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STEPREGISTERComponent } from './step-register.component';

describe('STEPREGISTERComponent', () => {
  let component: STEPREGISTERComponent;
  let fixture: ComponentFixture<STEPREGISTERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STEPREGISTERComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STEPREGISTERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
