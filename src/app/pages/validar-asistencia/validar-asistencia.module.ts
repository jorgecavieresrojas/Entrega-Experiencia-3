import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidarAsistenciaPageRoutingModule } from './validar-asistencia-routing.module';

import { ValidarAsistenciaPage } from './validar-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidarAsistenciaPageRoutingModule
  ],
  declarations: [ValidarAsistenciaPage]
})
export class ValidarAsistenciaPageModule {}
