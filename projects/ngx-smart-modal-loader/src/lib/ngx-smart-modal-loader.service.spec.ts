import { TestBed } from '@angular/core/testing';

import { NgxSmartModalLoaderService } from './ngx-smart-modal-loader.service';

describe('NgxSmartModalLoaderService', () => {
  let service: NgxSmartModalLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSmartModalLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
