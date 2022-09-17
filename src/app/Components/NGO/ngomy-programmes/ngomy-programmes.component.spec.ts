import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGOMyProgrammesComponent } from './ngomy-programmes.component';

describe('NGOMyProgrammesComponent', () => {
  let component: NGOMyProgrammesComponent;
  let fixture: ComponentFixture<NGOMyProgrammesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGOMyProgrammesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGOMyProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
