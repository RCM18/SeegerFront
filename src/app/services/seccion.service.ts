import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seccion } from '../models/seccion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {
  private apiUrl = 'http://localhost:8080/api/secciones';

  constructor(private http: HttpClient) {}

  getSecciones(): Observable<Seccion[]> {
    return this.http.get<Seccion[]>(this.apiUrl);
  }
  getSeccionById(id: number): Observable<Seccion> {  
    return this.http.get<Seccion>(`${this.apiUrl}/${id}`);
}

crearSeccion(seccion: Seccion): Observable<Seccion> {  
    return this.http.post<Seccion>(this.apiUrl, seccion);
}

deleteSeccion(id: number): Observable<void> { 
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
}

updateSeccion(seccion: Seccion, id: number): Observable<Seccion> {  
    return this.http.put<Seccion>(`${this.apiUrl}/${id}`, seccion);
}

}

