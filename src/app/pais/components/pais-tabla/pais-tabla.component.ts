import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/paises-interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent {

  @Input() paises: Pais[] = [];

}
