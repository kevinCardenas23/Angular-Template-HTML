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
    return new Promise<void>((resolve, reject) => {
      this.http.get('https://angular-html-58a46-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((resp) => {
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
    // if (this.productos.length === 0) {
    //   //Cargar los productos
    //   this.cargarProductos().then(() => {
    //     //Despues de tener los productos
    //     //Aplciar el filtro
    //     this.filtrarProductos(termino)
    //   })

    // } else {
    //   //Esperar a que carguen
    //   this.filtrarProductos(termino)
    // }

    this.productosFiltrado = this.productos.filter((producto: any) => {
      return true;
    });

    console.log(this.productosFiltrado);
    

  }
  private filtrarProductos(termino:string){
      console.log(this.productosFiltrado);
      
  }
}
