//librerias angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

//rutas
import { AppRoutingModule } from './app-routing.module';

//Services
//es mejor declararlos explicitamente en cada proveedor, porque si en el decorador se pone en root
//los instanciara todo el tiempo en la aplicacion
import { WitcherService } from './Services/witcher/witcher.service';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WitcherListComponent } from './Components/witcher-list/witcher-list.component';
import { WitcherContraComponent } from './Components/witcher-contra/witcher-contra.component';
import { WitcherPersonComponent } from './Components/witcher-person/witcher-person.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalculadoraComponent,
    FooterComponent,
    WitcherListComponent,
    WitcherContraComponent,
    WitcherPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [WitcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
