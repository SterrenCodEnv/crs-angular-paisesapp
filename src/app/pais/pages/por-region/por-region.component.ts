import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/paises-interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent{

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  existError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  claseDeBoton(region: string){
    return (region === this.regionActiva) ? 'btn-primary' : 'btn-outline-primary';
  }

  activarRegion(region: string): void{
    if(this.regionActiva === region) {return}
    this.regionActiva = region;
    this.existError = false;
    this.paisService.obtenerPaisPorRegion(region)
    .subscribe((resp) => {
      this.paises = resp;
    }, (err) => {
      console.log('ERROR');
      console.info(err);
      this.existError = true;
    })

  }

}
