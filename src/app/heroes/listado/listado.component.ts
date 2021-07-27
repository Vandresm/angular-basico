import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman' , 'Thor', 'Hulk', 'ironman', 'Cap']  
  heroeB :string = '';
  borrar: boolean = false;

  borrarHeroes(){
     this.heroeB = this.heroes.shift() || '';     
    }
     
   
}
