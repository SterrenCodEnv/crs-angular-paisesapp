import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/paises-interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor: pointer;
    }`
  ]
})
export class PorPaisComponent{
  existError: boolean = false;
  placeholder: string = 'Buscar por país...';
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.existError = false;
    this.paisService.buscarPais(termino)
    .subscribe((resp) => {
      this.paises = resp;
    }, (err) => {
      console.log('ERROR');
      console.info(err);
      this.existError = true;
    })
  }

  sugerencias(termino: string){
    this.existError = false;
    this.paisService.buscarPais(termino).subscribe(paises => {
      this.paisesSugeridos = paises.splice(0, 5)
    }, err => {
      this.paisesSugeridos = [];
    })
  }
}
