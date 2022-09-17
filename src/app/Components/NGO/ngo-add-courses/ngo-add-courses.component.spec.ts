import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGOAddCoursesComponent } from './ngo-add-courses.component';

describe('NGOAddCoursesComponent', () => {
  let component: NGOAddCoursesComponent;
  let fixture: ComponentFixture<NGOAddCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGOAddCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGOAddCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
