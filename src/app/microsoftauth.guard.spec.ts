import { TestBed } from '@angular/core/testing';

import { MicrosoftauthGuard } from './microsoftauth.guard';

describe('MicrosoftauthGuard', () => {
  let guard: MicrosoftauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MicrosoftauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
