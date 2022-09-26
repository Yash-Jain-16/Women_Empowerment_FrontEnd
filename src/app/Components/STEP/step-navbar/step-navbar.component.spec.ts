import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STEPNavbarComponent } from './step-navbar.component';

describe('STEPNavbarComponent', () => {
  let component: STEPNavbarComponent;
  let fixture: ComponentFixture<STEPNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STEPNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STEPNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
