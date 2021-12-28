import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  personaForm: FormGroup;
  titulo = 'Crear Persona';
  id : string | null;
  fechaNac : Date = new Date();
  

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private _personaService: PersonaService,
              private aRouter: ActivatedRoute) { 
    this.personaForm = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      sexo: ['', Validators.required]
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editarPersona();
  }

  agregarPersona(){
    
    const PERSONA: Persona = {
      nombre: this.personaForm.get('nombre')?.value,
      fecha:  this.personaForm.get('fecha')?.value,
      sexo:  this.personaForm.get('sexo')?.value
    }

    if (this.id !== null) {
      //editar
      this._personaService.editarPersona(this.id, PERSONA).subscribe(data => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.personaForm.reset();      
      })

    } else {
      //agregar
      console.log(PERSONA);
    this._personaService.nuevaPersona(PERSONA).subscribe(data => {
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.personaForm.reset();      
    })

    }
        
  }

  editarPersona() {
    if(this.id != null){
      this.titulo = 'Editar Persona';
      this._personaService.obtenerPersona(this.id).subscribe(data => {
        this.fechaNac= data.fecha;
        this.personaForm.setValue({
          nombre: data.nombre,
          fecha: data.fecha,
          sexo: data.sexo,
        })
      })

    }
  }
}
