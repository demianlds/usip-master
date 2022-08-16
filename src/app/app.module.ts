import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreasComponent } from './componentes/areas/areas.component';
import { AreaComponent } from './componentes/area/area.component';
import { CrearAreaComponent } from './componentes/crear-area/crear-area.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { CrearEmpleadoComponent } from './componentes/crear-empleado/crear-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    CrearAreaComponent,
    AreasComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    CrearEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
