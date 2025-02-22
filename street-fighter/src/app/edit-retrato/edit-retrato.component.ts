import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILuchador } from '../interfaces/luchador.interface';

@Component({
  selector: 'app-edit-retrato',
  templateUrl: './edit-retrato.component.html',
  styleUrls: ['./edit-retrato.component.css']
})
export class EditRetratoComponent {

  @Input() luchador!: ILuchador;
  selectedFile: File | null = null;
  newImageUrl: string | null = null; // Nueva propiedad para la URL de la imagen

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage(); // Mostrar vista previa de la imagen
  }

  previewImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newImageUrl = reader.result as string; // Asignar la URL de la imagen
      }
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.newImageUrl = null;
    }
  }

  actualizarRetrato() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);

      // Intenta acceder a la propiedad 'id' del luchador, si existe
      const luchadorId = (this.luchador as any).id;

      if (luchadorId !== undefined) {
        this.http.post(`http://localhost:3000/luchadores/${luchadorId}/retrato`, formData)
          .subscribe(
            response => {
              console.log('Retrato actualizado correctamente');
              // Actualizar la imagen en la interfaz
              this.luchador.retrato = this.newImageUrl || this.luchador.retrato;
              this.newImageUrl = null;
              this.selectedFile = null;
              alert('¡Retrato actualizado con éxito!');
            },
            error => {
              console.error('Error al actualizar el retrato', error);
              alert('Error al actualizar el retrato. Consulta la consola para más detalles.');
            }
          );
      } else {
        console.error('El luchador no tiene la propiedad "id".');
        alert('El luchador no tiene la propiedad "id".');
      }
    } else {
      alert('Por favor, selecciona una imagen antes de actualizar.');
    }
  }
}
