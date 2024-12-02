import { Categoria } from "./categoria";

export class Seccion {
    id: number;
    nombre: string;   
    estado: 'A' | 'I';
    categoria: Categoria;
  
    constructor(id: number = 0, nombre: string = '', estado: 'A' | 'I' = 'A', categoria: Categoria = new Categoria(),) {
        this.id = id;
        this.nombre = nombre;     
        this.estado = estado;
        this.categoria = categoria;
    }  
}
