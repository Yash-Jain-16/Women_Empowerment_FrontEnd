import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGOCriteriaComponent } from './ngo-criteria.component';

describe('NGOCriteriaComponent', () => {
  let component: NGOCriteriaComponent;
  let fixture: ComponentFixture<NGOCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGOCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGOCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
