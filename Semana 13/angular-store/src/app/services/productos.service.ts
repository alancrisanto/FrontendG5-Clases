import { Injectable } from '@angular/core';

//Es la herramienta que me permite hacer peticiones en angular
import { HttpClient } from '@angular/common/http';
//observable es la manera que se va a enviar el resultado de mis peticiones
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url:string = "https://617b3272d842cf001711bde0.mockapi.io/productos";

  // inyeccion de dependencias
  //const _Http =  new HttpClient()

  constructor(private _Http:HttpClient) { }

  obtenerProductos():Observable<any>{
    return this._Http.get(this.url)
  }
}
