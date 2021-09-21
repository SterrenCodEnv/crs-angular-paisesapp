import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Capital } from '../../interfaces/capitales-interfaces';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  existError: boolean = false;
  placeholder: string = 'Buscar por capital...';
  capitales: Capital[] = [];

  constructor(private paisService:PaisService) { }

  buscar(termino: string){
    this.existError = false;
    this.paisService.buscarCapital(termino)
    .subscribe((resp) => {
      this.capitales = resp;
    }, (err) => {
      console.log('ERROR');
      console.info(err);
      this.existError = true;
    })
  }

  sugerencias(termino: string){
    this.existError = false;
    //TODO: Crear sugerencias
  }
}
