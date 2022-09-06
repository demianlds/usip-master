import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['../../estilos/estilos.css']
})
export class CrearEmpleadoComponent implements OnInit {
contactForm!:FormGroup


constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log("Form ->")
  }
}
