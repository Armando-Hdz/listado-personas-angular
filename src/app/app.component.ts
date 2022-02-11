import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas:Persona[] = [ ];
 
  nombreInput: string = '';
  apellidoInput: string = '';

  /*agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    this.personas.push(persona1);
  }*/
  constructor(private logginService: LoggingService,
              private personasService: PersonasService){}

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  /*personaAgregada(persona: Persona){
    //this.logginService.enviarMensajeConsola("Se agrego al arreglo a la persona: " + persona.nombre);
    //this.personas.push(persona);
    this.personasService.agregarPersona(persona);
  }*/

}
