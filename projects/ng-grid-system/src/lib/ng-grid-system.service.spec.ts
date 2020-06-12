import { TestBed } from '@angular/core/testing';

import { NgGridSystemService } from './ng-grid-system.service';

describe('NgGridSystemService', () => {
  let service: NgGridSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgGridSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
