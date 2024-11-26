import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionEventosPageRoutingModule } from './gestion-eventos-routing.module';

import { GestionEventosPage } from './gestion-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionEventosPageRoutingModule
  ],
  declarations: [GestionEventosPage]
})
export class GestionEventosPageModule {}
