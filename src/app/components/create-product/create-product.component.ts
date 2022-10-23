import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
   selector: 'app-create-product',
   templateUrl: './create-product.component.html',
   styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

   constructor(
      private productService: ProductsService,
      private modalService: ModalService) {
   }

   form = new FormGroup({
      productTitle: new FormControl<string>('',
         [Validators.required, Validators.minLength(6)])
   })

   get productTitle() {
      return this.form.controls.productTitle as FormControl
   }



   ngOnInit(): void {
   }

   submit() {
      this.productService.create({
         title: this.form.value.productTitle as string,
         price: 13.5,
         description: 'lorem ipsum set',
         image: 'https://i.pravatar.cc',
         category: 'electronic',
         rating: {
            rate: 0,
            count: 1
         }
      }).subscribe(() => {
         this.modalService.close()
      })
   }

}
