export type CharacterData = 'A' | 'I';


export class Libro {
  id: number;              
  titulo: string;          
  paginas: number;         
  edicion: string;         
  estado: CharacterData;          

  constructor(
    id: number = 0,
    titulo: string = '',
    paginas: number = 0,
    edicion: string = '',
    estado: CharacterData = 'A',  
        
  ) {
    this.id = id;
    this.titulo = titulo;
    this.paginas = paginas;
    this.edicion = edicion;
    this.estado = estado;    
  }
}
