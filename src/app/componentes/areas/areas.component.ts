import { Component, OnInit } from '@angular/core';
import { AreasService } from 'src/app/servicios/areas.service';
import { EmpleadosService } from 'src/app/servicios/empleados.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['../../estilos/estilos.css']
})
export class AreasComponent implements OnInit {

  constructor(
    public areasService: AreasService,
    public empleadosService: EmpleadosService
  ) { }

  ngOnInit(): void {
    console.log(this.areasService.areas);
  }

}
