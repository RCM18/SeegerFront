export class Categoria {
    id: number;
    nombre: string;   
    estado: 'A' | 'I';
  
    constructor(id: number = 0, nombre: string = '', estado: 'A' | 'I' = 'A') {
        this.id = id;
        this.nombre = nombre;     
        this.estado = estado;
    }
  }
