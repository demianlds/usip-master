import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './componentes/area/area.component';
import { AreasComponent } from './componentes/areas/areas.component';
import { CrearAreaComponent } from './componentes/crear-area/crear-area.component';
import { CrearEmpleadoComponent } from './componentes/crear-empleado/crear-empleado.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';

const routes: Routes = [
  { path: 'areas', component: AreasComponent },
  { path: 'areas/crear', component: CrearAreaComponent },
  { path: 'areas/:id', component: AreaComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'empleados/crear', component: CrearEmpleadoComponent },
  { path: 'empleados/:id', component: EmpleadoComponent },
  { path: '**', redirectTo: 'areas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
