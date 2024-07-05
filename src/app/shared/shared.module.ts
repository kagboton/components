import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';



@NgModule({
  declarations: [
    DividerComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [DividerComponent]  // make DividerComponent available to other module
})
export class SharedModule { }
