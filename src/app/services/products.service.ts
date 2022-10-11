import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs";
import { IProduct } from "../models/product";

@Injectable({
   providedIn: 'root'
})
export class ProductsService {
   urls = {
      getAll: 'https://fakestoreapi.com/products'
   }

   constructor(private http: HttpClient) {

   }

   getAll(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this.urls.getAll, {
         params: new HttpParams({
            fromObject: { limit: 5 }
         })
      })
   }
}