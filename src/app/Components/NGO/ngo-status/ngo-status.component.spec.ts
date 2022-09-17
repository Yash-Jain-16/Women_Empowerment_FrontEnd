import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGOStatusComponent } from './ngo-status.component';

describe('NGOStatusComponent', () => {
  let component: NGOStatusComponent;
  let fixture: ComponentFixture<NGOStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGOStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGOStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
