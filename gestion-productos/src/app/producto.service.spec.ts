import { TestBed } from '@angular/core/testing';

import { ProductoService } from './producto.service';

describe('CargaProductoService', () => {
  let service: CargaProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
