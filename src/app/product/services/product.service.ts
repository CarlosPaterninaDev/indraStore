import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';
import { map } from 'rxjs/operators';
import { ResponseDB } from '../../database/response.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductsData() {
    return this.http.get<ResponseDB>('assets/database/productDB.json').pipe(
      map((resp) => {
        return [...resp.products];
      })
    );
  }

  getProductsById(idProduct) {
    return this.http.get<ResponseDB>('assets/database/productDB.json').pipe(
      map((resp) => {
        const product = resp.products.filter(
          (product) => product.id == idProduct
        )[0];

        return { ...product };
      })
    );
  }
}
