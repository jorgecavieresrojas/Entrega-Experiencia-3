import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaeliminaeventoPageRoutingModule } from './editaeliminaevento-routing.module';

import { EditaeliminaeventoPage } from './editaeliminaevento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaeliminaeventoPageRoutingModule
  ],
  declarations: [EditaeliminaeventoPage]
})
export class EditaeliminaeventoPageModule {}
