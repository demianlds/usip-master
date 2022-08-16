import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/servicios/empleados.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['../../estilos/estilos.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(
    private empleadosService: EmpleadosService
  ) { }

  ngOnInit(): void {

  }

}
