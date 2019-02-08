import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { WitcherListComponent } from './Components/witcher-list/witcher-list.component'
import { WitcherContraComponent } from './Components/witcher-contra/witcher-contra.component'
import { WitcherPersonComponent } from './Components/witcher-person/witcher-person.component'
import { MainFatherComponent } from './Components/01 pipe section/main-father/main-father.component'

const routes: Routes = [{
  path: 'calc',
  component: CalculadoraComponent
},
{
  path: 'witcher-list',
  component: WitcherListComponent
},
{
  path: 'witcher-contra/:id/:titulo',
  component: WitcherContraComponent
},
{
  path: 'witcher-person/:texto',
  component: WitcherPersonComponent
},
{
  path: 'pipes-father',
  component: MainFatherComponent
},
{
  path: '**',
  pathMatch: 'full',
  redirectTo:'calc'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
