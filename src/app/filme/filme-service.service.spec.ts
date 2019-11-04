import { TestBed } from '@angular/core/testing';

import { FilmeServiceService } from './filme-service.service';

describe('FilmeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmeServiceService = TestBed.get(FilmeServiceService);
    expect(service).toBeTruthy();
  });
});
