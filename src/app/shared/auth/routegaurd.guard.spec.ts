import { TestBed } from '@angular/core/testing';

import { RoutegaurdGuard } from './routegaurd.guard';

describe('RoutegaurdGuard', () => {
  let guard: RoutegaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoutegaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
