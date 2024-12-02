import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog'; 
import { ToastModule } from 'primeng/toast';
import { Libro } from '../models/libro';
import { LibroService } from '../services/libro.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule, RouterModule, InputTextModule,
    FormsModule, ConfirmDialogModule, ToastModule],
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {  
  libros: Libro[] = [];  
  visible: boolean = false;
  isDeleteInProgress: boolean = false;
  libro = new Libro();
  titulo: string = '';
  opc: string = '';
  op = 0;   

  constructor(
    private libroService: LibroService,   
    private messageService: MessageService
  ) {}

  ngOnInit() {    
    this.listarLibros();    
  }

  
  listarLibros() {
    this.libroService.getLibro().subscribe((data) => {
      this.libros = data;
    });
  }

   showDialogCreate() {
    this.titulo = "Crear Libro";
    this.opc = "Guardar";   
    this.op = 0;
    this.visible = true; // Cambia la visibilidad del diálogo
  }

  showDialogEdit(id: number) {
    this.titulo = "Editar Libro";
    this.opc = "Editar"; 
    this.libroService.getLibroById(id).subscribe((data) => {
      this.libro = data; 
      this.op = 1;     
    });    
    this.visible = true; // Cambia la visibilidad del diálogo
  }

  deleteLibro(id: number) {
    this.isDeleteInProgress = true;
    this.libroService.deleteLibro(id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Correcto',
          detail: 'Libro eliminado',
        });
        this.isDeleteInProgress = false;
        this.listarLibros();
      },
      error: () => {
        this.isDeleteInProgress = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo eliminar el Libro',
        });
      },
    });
  }

  opcion() {
    if (this.op == 0) {
      this.addLibro();
      this.limpiar();
    } else if (this.op == 1) {
      console.log("Editar");
      this.editLibro();
      this.limpiar();
    } else {
      console.log("No se hace nada");
      this.limpiar();
    }
  }

  addLibro() {
    this.libroService.crearLibro(this.libro).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Correcto',
          detail: 'Libro Registrado',
        });
        this.listarLibros();
        this.op = 0;
      },
      error: () => {
        this.isDeleteInProgress = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo Crear el Libro',
        });
      },
    });    
    this.visible = false;
  }

  editLibro() {
    this.libroService.updateLibro(this.libro, this.libro.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Correcto',
          detail: 'Libro Editado',
        });
        this.listarLibros();
        this.op = 0;
      },
      error: () => {
        this.isDeleteInProgress = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo Editar el Libro',
        });
      },
    });    
    this.visible = false;
  }

  limpiar() {
    this.titulo = '';
    this.opc = '';
    this.op = 0; 
    this.libro.id = 0;    
    this.libro.titulo = '';
    this.libro.paginas = 0;
    this.libro.edicion = '';
    this.libro.estado = 'A';
  }
}

