import { Injectable,Inject, inject } from '@angular/core';
import { Product } from '../product'; //Adım 1
import { Http, Response } from '@angular/http'; //Adım 2

import { Observable } from 'rxjs'; 
import { map,catchError,tap } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:Http, @Inject("apiUrl") private apiUrl) { }

  getProducts(seoUrl:string):Observable<Product[]>{
    if(seoUrl){
      return this.http.get(`${this.apiUrl}/products/${seoUrl}`)
      .pipe(map(response=>response.json()));
    }else{
      return this.http.get(`${this.apiUrl}/products`)
      .pipe(map(response=>response.json()));
    }
   
  }
}
