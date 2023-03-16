import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Product {
  id: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(query: string): Observable<Product[]> {
    let url = new URL('https://example.com/api/products');
    url.searchParams.set('q', query);
    return this.http.get<Product[]>(url.toString()).pipe(map(res => res || []));
  }
}
