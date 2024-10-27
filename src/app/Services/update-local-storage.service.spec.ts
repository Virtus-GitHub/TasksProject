import { TestBed } from '@angular/core/testing';

import { UpdateLocalStorageService } from './update-local-storage.service';

describe('UpdateLocalStorageService', () => {
  let service: UpdateLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
