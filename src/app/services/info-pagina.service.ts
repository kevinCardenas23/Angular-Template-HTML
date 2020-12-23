import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargada = false;

  constructor(private http: HttpClient) {
    console.log("Funciono el infopaginaService !!");
    //Leer el archivo JSON para leer las propiedades
    this.http.get('assets/data/data-pagina.json').subscribe(resp => {
      this.cargada = true;
      this.info = resp
      console.log(resp)
      console.log(this.info['titulo']);
      
    })
  }
}
