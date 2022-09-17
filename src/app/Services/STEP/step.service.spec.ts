import { TestBed } from '@angular/core/testing';

import { STEPService } from './step.service';

describe('STEPService', () => {
  let service: STEPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(STEPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
