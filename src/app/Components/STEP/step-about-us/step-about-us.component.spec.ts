import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STEPAboutUsComponent } from './step-about-us.component';

describe('STEPAboutUsComponent', () => {
  let component: STEPAboutUsComponent;
  let fixture: ComponentFixture<STEPAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STEPAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STEPAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
