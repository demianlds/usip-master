import { Injectable } from '@angular/core';
import { Empleado } from '../modelos/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() {
    this.crearEmpleado(new Empleado('Perez', 'Juan', 0));
    this.crearEmpleado(new Empleado('Gonzalez', 'Pedro', 1));
    console.log(this.empleados);
  }

  empleados: Empleado[] = [];

  obtenerEmpleado(id: number) {
    return this.empleados[id];
  }

  crearEmpleado(empleado: Empleado) {
    this.empleados.push(empleado);
  }

  editarEmpleado(id: number, data: Empleado) {
    this.empleados[id] = data;
  }

  eliminarEmpleado(id: number) {
    delete this.empleados[id];
  }

}
