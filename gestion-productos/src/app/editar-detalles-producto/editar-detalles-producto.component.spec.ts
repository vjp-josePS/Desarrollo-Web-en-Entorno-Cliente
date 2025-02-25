import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarDetallesProductoComponent } from './editar-detalles-producto.component';

describe('EditarDetallesProductoComponent', () => {
  let component: EditarDetallesProductoComponent;
  let fixture: ComponentFixture<EditarDetallesProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarDetallesProductoComponent] // Importa el componente para las pruebas
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDetallesProductoComponent); // Crea una instancia del componente
    component = fixture.componentInstance; // Obtiene la instancia del componente
    fixture.detectChanges(); // Ejecuta la detección de cambios
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se haya creado correctamente
  });
});
