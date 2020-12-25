import { Component } from '@angular/core';
import { User } from './cursos/cursos-lista/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudFront';

  /*Declaração de uma pipe. Essa declaração Json
   é usando no componente app.component.html */
  user: User = {
    name: 'Jefferson',
    age: 29
  }
  percentValue: number= 0.5; //Converter número para porcentagem
  date: Date = new Date(); //Data Atual
  moneyValue: number = 45;

}
