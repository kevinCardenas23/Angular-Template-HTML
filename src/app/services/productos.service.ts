import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: any = [];
  productosFiltrado: any = [];

  constructor(private http: HttpClient) {
    this.cargarProductos()
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-58a46-default-rtdb.firebaseio.com/productos_idx.json').subscribe((resp) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
      });
    });
  }

  getProducto(id: String) {
    return this.http.get(`https://angular-html-58a46-default-rtdb.firebaseio.com/productos/${id}.json`)
  }

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      //Cargar los productos
      this.cargarProductos().then(() => {
        //Despues de tener los productos
        //Aplicar el filtro
        this.filtrarProductos(termino)
      })

    } else {
      //aplicar el filtro
      this.filtrarProductos(termino)
    }

  }

  private filtrarProductos(termino: string) {
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach((prod: any) => {
      const tituloLower = prod.titulo.toLocaleLowerCase()
      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrado.push(prod);
      }
    });
  }
}
