import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargada = false;
  equipo: any = []

  constructor(private http: HttpClient) {
    this.cargarInfo()
    this.cargarEquipo()
  }

  private cargarInfo() {
    //Leer el archivo JSON para leer las propiedades
    this.http.get('assets/data/data-pagina.json').subscribe(resp => {
      this.cargada = true;
      this.info = resp
      console.log(resp)
      console.log(this.info['titulo']);
    })
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-58a46-default-rtdb.firebaseio.com/equipo.json').subscribe(resp => {
      this.equipo = resp
      console.log(resp) 
    })
  }
}

