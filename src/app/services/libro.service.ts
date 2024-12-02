import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';  

@Injectable({
  providedIn: 'root'
})
export class LibroService {  
  private apiUrl = 'http://localhost:8080/api/libros';  

  constructor(private http: HttpClient) {}

  getLibro(): Observable<Libro[]> {  // 
    return this.http.get<Libro[]>(this.apiUrl);
  }

  getLibroById(id: number): Observable<Libro> {  
    return this.http.get<Libro>(`${this.apiUrl}/${id}`);
  }

  crearLibro(libro: Libro): Observable<Libro> {  
    return this.http.post<Libro>(this.apiUrl, libro);
  }
  
  deleteLibro(id: number): Observable<void> { 
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateLibro(libro: Libro, id: number): Observable<Libro> {  
    return this.http.put<Libro>(`${this.apiUrl}/${id}`, libro);
  }
}
