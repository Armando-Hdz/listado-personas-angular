import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
  //providers:[LoggingService]
})
export class FormularioComponent {
  
 // @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidoInput: string = '';

  /*@ViewChild('nombreInput') nombre:ElementRef;
  @ViewChild('apellidoInput') apellido:ElementRef; */

  constructor(private loggingService: LoggingService, private personasService: PersonasService){
    this.personasService.saludar.subscribe(
      (indice:Number)=>alert("El Indice es: " + indice)
      )
   }

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    //CON REFERENCIA LOCAL
    //let persona1 = new Persona(this.nombre.nativeElement.value,this.apellido.nativeElement.value);
    //this.personas.push(persona1);
    //this.loggingService.enviarMensajeConsola("Enviamos persona con nombre: " + persona1.nombre + " " + persona1.apellido);
    this.personasService.agregarPersona(persona1);
    //this.personaCreada.emit(persona1);
  }

}
