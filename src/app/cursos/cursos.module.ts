import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { HeaderComponent } from './components/tamplates/header/header.component';
import { NavComponent } from './components/tamplates/nav/nav.component';
import { FooterComponent } from './components/tamplates/footer/footer.component';
import { HomeComponent } from './view/home/home.component';



@NgModule({
  declarations: [
    CursosListaComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    CursosListaComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    CursosListaComponent
  ],
  providers:[CursosService]
})
export class CursosModule { }
