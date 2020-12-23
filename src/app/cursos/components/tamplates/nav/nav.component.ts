import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  email: string = "jefferson.luiz.cruz@gmail.com";

  cursos: string[] = ['Java', 'TypeScript', 'Angular'];

  constructor() { }

  ngOnInit(): void {
  }

}
