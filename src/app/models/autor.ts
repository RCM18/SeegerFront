export class Autor {
    id: number;
    nombres: string;
    apellidos: string;
    pais: string;
    estado: 'A' | 'I';
  
    constructor(id: number = 0, nombres: string = '', apellidos: string = '', pais: string = '', estado: 'A' | 'I' = 'A') {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.pais = pais;
        this.estado = estado;
    }
  }