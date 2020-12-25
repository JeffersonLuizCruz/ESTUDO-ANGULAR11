import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent implements OnInit {

  constructor(private cursoService: CursosService) { }
  
  //<h3>##Interpolação estatica##</h3>
  emailAdress: string = "analista.jefferson.luiz";

  //<h3>##Uso da diretiva *ngFor##</h3>
  cursosTitle = this.cursoService.getCurso();

  //<h3>##Uso da diretiva [(ngModel)]=" "e (click)##</h3>
  public tasks: string[] = [];
  task = "";

  add():void{
    this.tasks.push(this.task);
  }

  //<h3>##Uso da diretiva [hidden]</h3>
  isAdmin = true;

  //<h3>##Uso da diretiva *ngIf</h3>
  isAdminNgIf: boolean = true;

  //<h3>##Uso da diretiva [ngSwitch]</h3>
  profile: number = 3;

  ngOnInit(): void {
  }

}
