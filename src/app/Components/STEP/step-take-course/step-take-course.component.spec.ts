import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STEPTakeCourseComponent } from './step-take-course.component';

describe('STEPTakeCourseComponent', () => {
  let component: STEPTakeCourseComponent;
  let fixture: ComponentFixture<STEPTakeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STEPTakeCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STEPTakeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
