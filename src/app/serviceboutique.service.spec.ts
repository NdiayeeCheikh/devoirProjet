import { TestBed } from '@angular/core/testing';

import { ServiceboutiqueService } from './serviceboutique.service';

describe('ServiceboutiqueService', () => {
  let service: ServiceboutiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceboutiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
