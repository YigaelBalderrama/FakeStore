import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Product } from '../shared/product.interface';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  public searchProducts(url: string) {
    return this.http.get<Product>(`${environment.baseUrl}${url}`);
  }
}
