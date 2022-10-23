import { Component, OnInit } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { IProduct } from './models/product';
import { ModalService } from './services/modal.service';
import { ProductsService } from './services/products.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   title = 'angular-first-project';
   loading = false; // loading indicator
   //products$: Observable<IProduct[]>;
   phrase = ""; // Search phrase for products

   constructor(public productsService: ProductsService,
      public modalService: ModalService) {

   }

   ngOnInit(): void {
      this.loading = true;
      // this.products$ = this.productsService.getAll().pipe(
      //    //tap(() => this.loading = false),
      //    finalize(() => this.loading = false)
      // );

      this.productsService.getAll().pipe(
         finalize(() => this.loading = false)
      ).subscribe(() => {
         this.loading = false;
      })
   }
}
