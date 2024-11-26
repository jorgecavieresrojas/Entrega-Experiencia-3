import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaeventoPageRoutingModule } from './creaevento-routing.module';

import { CreaeventoPage } from './creaevento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaeventoPageRoutingModule
  ],
  declarations: [CreaeventoPage]
})
export class CreaeventoPageModule {}
