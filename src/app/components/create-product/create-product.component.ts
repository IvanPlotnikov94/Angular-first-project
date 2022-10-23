import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
   selector: 'app-create-product',
   templateUrl: './create-product.component.html',
   styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

   form = new FormGroup({
      productTitle: new FormControl<string>('',
         [Validators.required, Validators.minLength(6)])
   })

   get productTitle() {
      return this.form.controls.productTitle as FormControl
   }

   constructor() { }

   ngOnInit(): void {
   }

   submit() {
      // ToDo
   }

}
