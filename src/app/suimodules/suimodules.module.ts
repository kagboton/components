import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SUIModulesRoutingModule } from './suimodules-routing.module';
import { SuiModulesHomeComponent } from './sui-modules-home/sui-modules-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    SuiModulesHomeComponent,
    ModalComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    SUIModulesRoutingModule, 
    SharedModule
  ]
})
export class SUIModulesModule { }
