import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGOAboutUsComponent } from './ngo-about-us.component';

describe('NGOAboutUsComponent', () => {
  let component: NGOAboutUsComponent;
  let fixture: ComponentFixture<NGOAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGOAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGOAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
