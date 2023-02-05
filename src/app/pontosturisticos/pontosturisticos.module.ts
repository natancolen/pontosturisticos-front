import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PontosturisticosRoutingModule } from './pontosturisticos-routing.module';
import { PontosturisticosComponent } from './pontosturisticos.component';
import { PontosturisticosFormComponent } from './pontosturisticos-form/pontosturisticos-form.component';


@NgModule({
  declarations: [PontosturisticosComponent, PontosturisticosFormComponent],
  imports: [
    CommonModule,
    PontosturisticosRoutingModule
  ]
})
export class PontosturisticosModule { }
