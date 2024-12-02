import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Editorial } from '../models/editorial';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {
  private apiUrl = 'http://localhost:8080/api/editoriales'; 

  constructor(private http: HttpClient) {}

  getEditoriales(): Observable<Editorial[]> {  
    return this.http.get<Editorial[]>(this.apiUrl);  
  }

}
