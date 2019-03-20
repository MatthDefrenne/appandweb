import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CommerceService } from './services/commerce.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  ctaBeingEdited = false;
  
  constructor(public commerceService: CommerceService) {

  }


  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
       let imgSrc = event.target.result;
       this.commerceService.commerce.url_logo = imgSrc;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }


}
