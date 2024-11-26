import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoAsistentesPageRoutingModule } from './listado-asistentes-routing.module';

import { ListadoAsistentesPage } from './listado-asistentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoAsistentesPageRoutingModule
  ],
  declarations: [ListadoAsistentesPage]
})
export class ListadoAsistentesPageModule {}
