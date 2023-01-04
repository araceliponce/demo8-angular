import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina1Component } from './pagina1/pagina1.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Pagina1Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Pagina1Component
  ]
})
export class DirectivasModule { }
