//librerias angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//rutas
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WitcherListComponent } from './Components/witcher-list/witcher-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalculadoraComponent,
    FooterComponent,
    WitcherListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
