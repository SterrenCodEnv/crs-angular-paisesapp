import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/paises-interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Pais;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    /* this.activatedRoute.params.subscribe(({id}) => {
      this.paisService.obtenerPaisPorCodigo(id).subscribe((resp) => {
        this.pais = resp;
      }, (error) => {
        console.log('ERROR');
        console.info(error);
      })
    }); */

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.obtenerPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe(
        (pais) => {
          this.pais = pais;
        },
        (error) => {
          console.log('ERROR');
          console.info(error);
        }
      );
  }
}
