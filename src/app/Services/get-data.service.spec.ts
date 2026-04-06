import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GetDataService } from './get-data.service';

describe('GetDataService', () => {
  let service: GetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
