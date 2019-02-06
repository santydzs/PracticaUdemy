import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { WitcherListComponent } from './Components/witcher-list/witcher-list.component'
import { WitcherContraComponent } from './Components/witcher-contra/witcher-contra.component'

const routes: Routes = [{
  path: 'calc',
  component: CalculadoraComponent
},
{
  path: 'witcher-list',
  component: WitcherListComponent
},
{
  path: 'witcher-contra/:id',
  component: WitcherContraComponent
},
{
  path: '**',
  pathMatch: 'full',
  redirectTo:'calc'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
