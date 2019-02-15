import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { WitcherListComponent } from './Components/witcher-list/witcher-list.component'
import { WitcherContraComponent } from './Components/witcher-contra/witcher-contra.component'
import { WitcherPersonComponent } from './Components/witcher-person/witcher-person.component'
import { MainFatherComponent } from './Components/01 pipe section/main-father/main-father.component'
import { MusicHomeComponent } from './Components/02 music app/music-home/music-home.component';
import { SearchSpotiComponent } from './Components/02 music app/search-spoti/search-spoti.component';

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
  path: 'music-home',
  component: MusicHomeComponent
},
{
  path: 'search-spoti',
  component: SearchSpotiComponent
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
