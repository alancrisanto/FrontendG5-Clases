import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  texto:string = "vacaciones";

  actividades:Array<string> = [
    "Ver películas",
    "Viajar",
    "Probar comida",
    "Nadar",
    "Escuchar Música",
    "Salir a cenar"
  ]
  
  losQuiere:boolean = false;

  urlImagen:string = "https://picsum.photos/400"

  nuevaActividad:string = ""

  constructor() { }

  agregarActividad() {
      console.log(this.nuevaActividad)
  }


  ngOnInit(): void {
  }

}
