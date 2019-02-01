import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraComponent } from './Components/calculadora/calculadora.component';

const routes: Routes = [{
  path: 'calc',
  component: CalculadoraComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
