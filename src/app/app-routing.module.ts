import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { WitcherListComponent } from './Components/witcher-list/witcher-list.component'

const routes: Routes = [{
  path: 'calc',
  component: CalculadoraComponent
},
{
  path: 'withcer-list',
  component: WitcherListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
