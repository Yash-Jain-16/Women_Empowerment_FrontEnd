import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGOFundingNormsComponent } from './ngo-funding-norms.component';

describe('NGOFundingNormsComponent', () => {
  let component: NGOFundingNormsComponent;
  let fixture: ComponentFixture<NGOFundingNormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGOFundingNormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGOFundingNormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
