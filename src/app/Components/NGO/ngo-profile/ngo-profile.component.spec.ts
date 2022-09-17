import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGOProfileComponent } from './ngo-profile.component';

describe('NGOProfileComponent', () => {
  let component: NGOProfileComponent;
  let fixture: ComponentFixture<NGOProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGOProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGOProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
