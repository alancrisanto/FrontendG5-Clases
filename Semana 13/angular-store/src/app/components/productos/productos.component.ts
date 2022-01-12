import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Subscription } from 'rxjs'; // son tipos de datos (string, boolean)

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  misProductos: Array<any>;
  subscripcionProdServ: Subscription;

  constructor(private _sProductos: ProductosService) {}

  getProductos() {
    this.subscripcionProdServ = this._sProductos
      .obtenerProductos()
      .subscribe((datos) => {
        console.log(datos);
      });
  }

  ngOnInit(): void {
    //equivale a un useEffect justo después del montaje
    this.getProductos();
  }
}