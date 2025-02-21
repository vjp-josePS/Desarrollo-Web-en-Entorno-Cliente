import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDetallesProductoComponent } from './editar-detalles-producto.component';

describe('EditarDetallesProductoComponent', () => {
  let component: EditarDetallesProductoComponent;
  let fixture: ComponentFixture<EditarDetallesProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarDetallesProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDetallesProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
