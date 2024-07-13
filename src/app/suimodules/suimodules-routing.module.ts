import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuiModulesHomeComponent } from './sui-modules-home/sui-modules-home.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {
    path: '', component: SuiModulesHomeComponent,
    children: [
      {path: 'modale', component: ModalComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SUIModulesRoutingModule { }
