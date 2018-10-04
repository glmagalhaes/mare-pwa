import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RelatoriosPage } from './relatorios.page';
import { RelatorioNovoPage } from '../relatorio-novo/relatorio-novo.page';

const routes: Routes = [
  {
    path: '',
    component: RelatoriosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RelatoriosPage, RelatorioNovoPage],
  entryComponents: [RelatorioNovoPage]
})
export class RelatoriosPageModule {
  constructor() {}
}
