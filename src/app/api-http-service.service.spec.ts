import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { ApiHttpServiceService } from './api-http-service.service';

describe('ApiHttpServiceService', () => {
  let service: ApiHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiHttpServiceService]
    });
    service = TestBed.inject(ApiHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return contacts', () => {
    expect(service.getContacts()).toBeTruthy();
  });


});
