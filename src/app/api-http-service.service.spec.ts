import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { ApiHttpService } from './api-http-service.service';

describe('ApiHttpService', () => {
  let service: ApiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiHttpService]
    });
    service = TestBed.inject(ApiHttpService);
  });

 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });





});
