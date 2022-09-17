import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeTakenCoursesComponent } from './trainee-taken-courses.component';

describe('TraineeTakenCoursesComponent', () => {
  let component: TraineeTakenCoursesComponent;
  let fixture: ComponentFixture<TraineeTakenCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeTakenCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeTakenCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
