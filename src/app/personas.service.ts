import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()

export class PersonasService{
    personas:Persona[] = [
        new Persona('Armando','Hernandez'),
        new Persona('Jaime','Sanchez'),
        new Persona('Maria','Juarez')
      ];
      
      saludar = new EventEmitter<number>();
    
      constructor(private LoggingService: LoggingService){}

      agregarPersona(persona: Persona){
          this.LoggingService.enviarMensajeConsola("Agregamos Persona: " + persona.nombre + " " + persona.apellido);
            this.personas.push(persona);
      }
}