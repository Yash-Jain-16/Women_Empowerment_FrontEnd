import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STEPHomeComponent } from './step-home.component';

describe('STEPHomeComponent', () => {
  let component: STEPHomeComponent;
  let fixture: ComponentFixture<STEPHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STEPHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STEPHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
