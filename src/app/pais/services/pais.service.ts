import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/paises-interfaces';
import { Capital } from '../interfaces/capitales-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://restcountries.eu/rest/v2';
  private httpParams = new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<Capital[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Capital[]>(url, {params: this.httpParams});
  }

  obtenerPaisPorCodigo(id: string): Observable<Pais>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais>(url);
  }

  obtenerPaisPorRegion(region: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }
}
