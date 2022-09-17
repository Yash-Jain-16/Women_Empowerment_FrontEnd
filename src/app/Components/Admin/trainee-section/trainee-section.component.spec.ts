import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeSectionComponent } from './trainee-section.component';

describe('TraineeSectionComponent', () => {
  let component: TraineeSectionComponent;
  let fixture: ComponentFixture<TraineeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
