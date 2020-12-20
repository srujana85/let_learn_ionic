import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwowayPageRoutingModule } from './twoway-routing.module';

import { TwowayPage } from './twoway.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwowayPageRoutingModule
  ],
  declarations: [TwowayPage]
})
export class TwowayPageModule {}
