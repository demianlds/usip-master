import { Injectable } from '@angular/core';
import { Area } from '../modelos/area';
import { EmpleadosService } from './empleados.service';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor(
    private empleadosService: EmpleadosService
  ) { }

  areas: Area[] = [];

  crearArea(area: Area) {
    this.areas.push(area);
  }

  obtenerArea(id: number) {
    return this.areas[id];
  }

  eliminarArea(id: number) {
    delete this.areas[id];
  }

  quitarEmpleado(idArea: number, idEmpleado: number) {
    this.areas[idArea].empleados.splice(idEmpleado, 1);
  }

  agregarEmpleado(idArea: number, idEmpleado: number) {
    this.areas[idArea].empleados.push(this.empleadosService.empleados[idEmpleado]);
  }

}
