import { TestBed } from '@angular/core/testing';

import { FichajeService } from './fichaje.service';

describe('FichajeService', () => {
  let service: FichajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
