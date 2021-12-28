import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listPersonas: Persona[] =[];

  constructor(private _personaService: PersonaService) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  obtenerPersonas() {
    this._personaService.getPersonas().subscribe(data =>{
      console.log(data);
      this.listPersonas = data;
    }, error => {
      console.log(error);
      
    })
  }

  eliminarPersona(id: any){
    this._personaService.eliminarPersona(id).subscribe(data => {
      console.log("Datos Eliminados");
      this.obtenerPersonas();
      
    }, error =>{
      console.log(error);
      
    })
  }

}
