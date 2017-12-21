import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AddUserService } from './add-user.service';

describe('AddUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpModule ],
      providers: [AddUserService]
    });
  });

  it('should be created', inject([AddUserService], (service: AddUserService) => {
    expect(service).toBeTruthy();
  }));
});
