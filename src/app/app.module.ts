import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CursosService } from './cursos/cursos.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
