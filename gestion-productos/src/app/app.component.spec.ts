// AppComponent.spec.ts
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Importa el componente para las pruebas
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crea una instancia del componente
    const app = fixture.componentInstance; // Obtiene la instancia del componente
    expect(app).toBeTruthy(); // Verifica que el componente se haya creado correctamente
  });

  it(`should have the 'gestion-productos' title`, () => {
    const fixture = TestBed.createComponent(AppComponent); // Crea una instancia del componente
    const app = fixture.componentInstance; // Obtiene la instancia del componente
    expect(app.title).toEqual('Mi Primera App con Angular'); // Verifica el título de la aplicación
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crea una instancia del componente
    fixture.detectChanges(); // Ejecuta la detección de cambios
    const compiled = fixture.nativeElement as HTMLElement; // Obtiene el elemento nativo del componente
    expect(compiled.querySelector('h1')?.textContent).toContain('Mi Primera App con Angular'); // Verifica que el título se renderice correctamente
  });
});
