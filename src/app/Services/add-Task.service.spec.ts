import { TestBed } from '@angular/core/testing';

import { AddTaskService } from './add-Task.service';

describe('TaskService', () => {
  let service: AddTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
