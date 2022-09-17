import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGOOrganizationsComponent } from './ngo-organizations.component';

describe('NGOOrganizationsComponent', () => {
  let component: NGOOrganizationsComponent;
  let fixture: ComponentFixture<NGOOrganizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGOOrganizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGOOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
