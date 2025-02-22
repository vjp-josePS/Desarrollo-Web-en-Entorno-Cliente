import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesProductoComponent } from './detalles-producto.component';

describe('DetallesProductoComponent', () => {
  let component: DetallesProductoComponent;
  let fixture: ComponentFixture<DetallesProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesProductoComponent] // Importa el componente para las pruebas
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesProductoComponent); // Crea una instancia del componente
    component = fixture.componentInstance; // Obtiene la instancia del componente
    fixture.detectChanges(); // Ejecuta la detección de cambios
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se haya creado correctamente
  });
});
