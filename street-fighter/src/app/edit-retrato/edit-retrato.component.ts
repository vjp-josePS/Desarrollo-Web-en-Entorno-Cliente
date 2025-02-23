import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-edit-retrato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-retrato.component.html',
  styleUrls: ['./edit-retrato.component.css']
})
export class EditRetratoComponent {
  @Input() luchador!: any;
  selectedFile: File | null = null;
  nuevoRetrato: string = '';
  urlAPI: string = 'http://localhost:3000/luchadores';

  constructor(private http: HttpClient) { }

  // Método que se ejecuta cuando se selecciona un archivo
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.getBase64(this.selectedFile)
        .then(result => {
          this.nuevoRetrato = result as string;
        })
        .catch(err => console.log(err));
    }
  }

  // Método para convertir un archivo a base64
  getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  // Método para subir el nuevo retrato
  uploadFile() {
    if (this.selectedFile) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const body = JSON.stringify({ ...this.luchador, retrato: this.nuevoRetrato });
  
      this.http.put(`${this.urlAPI}/${encodeURIComponent(this.luchador.nombre)}`, body, { headers, responseType: 'text' })
        .pipe(
          catchError(error => {
            console.error('Error en la petición PUT', error);
            alert('Error al actualizar el retrato: ' + (error.error || error.message));
            return throwError(() => error);
          })
        )
        .subscribe({
          next: (response: any) => {
            console.log('Retrato actualizado correctamente', response);
            alert('Retrato actualizado correctamente');
            window.location.reload();
          },
          error: (error) => {
            console.error('Error al actualizar el retrato', error);
            alert('Error al actualizar el retrato');
          }
        });
    }
  }
}
