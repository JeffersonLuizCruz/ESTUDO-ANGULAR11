import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent implements OnInit {

  constructor(private cursoService: CursosService) { }

  emailAdress: string = "analista.jefferson.luiz";
  cursosTitle = this.cursoService.getCurso();

  ngOnInit(): void {
  }

}
