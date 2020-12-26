import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: any = []

  constructor(private http: HttpClient) {
    this.cargarProductos()
  }

  private cargarProductos() {
    this.http.get('https://angular-html-58a46-default-rtdb.firebaseio.com/productos_idx.json').subscribe((resp) => {
    this.productos = resp
    this.cargando = false;
    })
  }

  getProducto(id:String){
    return this.http.get(`https://angular-html-58a46-default-rtdb.firebaseio.com/productos/${id}.json`)
  }
}
