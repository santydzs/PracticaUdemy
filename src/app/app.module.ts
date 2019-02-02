import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './Components/header/header.component';
import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { FooterComponent } from './Components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalculadoraComponent,
    FooterComponent
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
