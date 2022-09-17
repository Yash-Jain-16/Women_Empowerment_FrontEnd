import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGORegisterComponent } from './ngo-register.component';

describe('NGORegisterComponent', () => {
  let component: NGORegisterComponent;
  let fixture: ComponentFixture<NGORegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGORegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGORegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
