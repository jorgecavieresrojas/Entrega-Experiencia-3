import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeventPageRoutingModule } from './listevent-routing.module';

import { ListeventPage } from './listevent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeventPageRoutingModule
  ],
  declarations: [ListeventPage]
})
export class ListeventPageModule {}
