import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
  
})
export class PersonajesComponent {

  //@Input('dataPersonajes') personajes: Personaje[]=[];
  get personajes (){
    return this.DbzService.personajes;
  }

  constructor(private DbzService: DbzService){}

}
