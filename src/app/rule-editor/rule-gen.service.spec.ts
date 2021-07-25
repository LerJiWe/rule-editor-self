import { TestBed } from '@angular/core/testing';

import { RuleGenService } from './rule-gen.service';

describe('RuleGenService', () => {
  let service: RuleGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuleGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
