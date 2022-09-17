import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STEPProfileComponent } from './step-profile.component';

describe('STEPProfileComponent', () => {
  let component: STEPProfileComponent;
  let fixture: ComponentFixture<STEPProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STEPProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STEPProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
