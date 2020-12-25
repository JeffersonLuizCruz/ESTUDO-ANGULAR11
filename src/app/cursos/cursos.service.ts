import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  baseURL= "https://jsonplaceholder.typicode.com/comments";

  constructor(private http: HttpClient) { }

  getComment(): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.baseURL);
  }
  
  /*O método getCurso dessa classe CursosService está ligada ao componente
   cursos.component.ts e ao cursos.coponent.html*/
  getCurso(): string[]{
    return ['Java 11', 'TypeScript', 'Angular'];
  }


}
