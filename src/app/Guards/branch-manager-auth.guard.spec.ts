import { TestBed } from '@angular/core/testing';

import { BranchManagerAuthGuard } from './branch-manager-auth.guard';

describe('BranchManagerAuthGuard', () => {
  let guard: BranchManagerAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BranchManagerAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
