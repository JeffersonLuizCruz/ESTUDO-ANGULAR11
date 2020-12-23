import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }
  
  getCurso(): string[]{
    return ['Java', 'TypeScript', 'Angular'];
  }


}
