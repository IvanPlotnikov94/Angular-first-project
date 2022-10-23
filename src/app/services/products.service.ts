import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http"
import { catchError, delay, finalize, Observable, tap, throwError } from "rxjs";
import { IProduct } from "../models/product";
import { ErrorService } from "./error.service";

@Injectable({
   providedIn: 'root'
})
export class ProductsService {
   urls = {
      getAll: 'https://fakestoreapi.com/products',
      create: 'https://fakestoreapi.com/products',
      // for testing loader: success with delay
      //getAll: 'https://run.mocky.io/v3/451295cb-6fb4-4e8c-99bd-1aa0e1016387?mocky-delay=2000ms'

      // for testing loader: error with delay
      // getAll: 'https://run.mocky.io/v3/a73f955d-232d-48bc-9565-6f4f6901dcb8?mocky-delay=2000ms'
   }

   constructor(private http: HttpClient, private errorService: ErrorService) {

   }

   products: IProduct[] = []

   getAll(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this.urls.getAll, {
         params: new HttpParams({
            fromObject: { limit: 5 }
         })
      }).pipe(
         tap(products => this.products = products),
         catchError(this.errorHandler.bind(this))
      )
   }

   create(product: IProduct): Observable<IProduct> {
      return this.http.post<IProduct>(this.urls.create, product).pipe(
         tap(product => this.products.push(product)));
   }

   private errorHandler(error: HttpErrorResponse) {
      this.errorService.handle(error.message);
      return throwError(() => error.message);
   }
}
