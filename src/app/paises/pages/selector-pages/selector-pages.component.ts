import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators'
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../interfaces/paises.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-selector-pages',
  templateUrl: './selector-pages.component.html',
  styles: [
  ]
})
export class SelectorPagesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: [{ value: ''}, Validators.required]
  });

  //Llenar selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  fronteras: string[] = [];

  cargando: boolean = false;


  constructor(private fb: FormBuilder, 
    private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    //Cuando cambie de region
    //this.miFormulario.get('region')?.valueChanges
    //  .subscribe(region => {
    //      console.log(region);
    //      this.paisesService.getPaisesPorRegion( region )
    //        .subscribe( paises => {
    //          console.log(paises);
    //          this.paises = paises;
    //        });
    //    });

    this.miFormulario.get('region')?.valueChanges
        .pipe (
          tap( _ => {
            this.miFormulario.get('pais')?.reset('');
            this.cargando = true;
          }),
          switchMap( region => this.paisesService.getPaisesPorRegion( region ))
        ).subscribe( paises => {
          this.paises = paises;
          this.cargando = false;
        });

      // Cuando cambia el País 
      this.miFormulario.get('pais')?.valueChanges
        .pipe (
          tap( _ => {
            this.fronteras = [];
            this.miFormulario.get('frontera')?.reset('');
            this.cargando = true;
          }),
          switchMap ( pais => 
            this.paisesService.getPaisPorCodigo( pais )
          )
        ).subscribe( pais => {
          console.log(pais);
          this.fronteras = pais?.borders || [];
          this.cargando = false;
        }
        );
  }

  guardar(): void {
    console.log(this.miFormulario.value);
  }

}
