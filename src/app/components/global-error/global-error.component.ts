import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
   selector: 'app-global-error',
   templateUrl: './global-error.component.html',
   styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent implements OnInit {
   public closeErrorMessage() {
      this.errorService.clear();
   }

   constructor(public errorService: ErrorService) { }

   ngOnInit(): void {

   }

}
