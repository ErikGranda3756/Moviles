import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { IconService } from './services/icon.service';
import { HttpClientModule } from '@angular/common/http';
//llamamos al side module para que cargue al mismo timepo como el coremodules
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    //cargo el modulo para la seguridad que necesito en el metodo de registro de iconos
    HttpClientModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  //cargo el servicio de los iconos
  constructor(private iconService: IconService) {}
}
