import { TestBed } from '@angular/core/testing';

import { CargaProductoService } from './carga-producto.service';

describe('CargaProductoService', () => {
  let service: CargaProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
