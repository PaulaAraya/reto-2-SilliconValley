import { TestBed, inject } from '@angular/core/testing';

import { ApiUnsplashService } from './api-unsplash.service';

describe('ApiUnsplashService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiUnsplashService]
    });
  });

  it('should be created', inject([ApiUnsplashService], (service: ApiUnsplashService) => {
    expect(service).toBeTruthy();
  }));
});
