import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../../services/commerce.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'layout-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  
  detailsForm: FormGroup
  googleMap: any;
  googleMapURL: any;

  constructor(public commerceService: CommerceService, private formBuilder: FormBuilder, public domSanitizer: DomSanitizer) {
    this.processGoogleMap();
    this.initializeForm();
   }

  ngOnInit() {
  }


  initializeForm() {
    this.detailsForm = this.formBuilder.group({
      postal:  [this.commerceService.commerce.details.postal, Validators.required],
      town: [this.commerceService.commerce.details.town, Validators.required],
      telephone: [this.commerceService.commerce.details.telephone, Validators.required],
      portable: [this.commerceService.commerce.details.portable],
      fax: [this.commerceService.commerce.details.fax],
      email: [this.commerceService.commerce.details.email],
      website_url: [this.commerceService.commerce.details.website_url],
      easy_access: [this.commerceService.commerce.details.easy_access],
      downtown: [this.commerceService.commerce.details.downtown],
      contact_name: [this.commerceService.commerce.details.contact_name, Validators.required],
      adresse: [this.commerceService.commerce.details.adresse, Validators.required],
    });
  }


  cancel() {
    this.initializeForm() // Re initialize form due to potential modification in the form
 }


 saveModification() {
   console.log("hello");
   let detailsForm = this.detailsForm.value;
   detailsForm = {
    details: this.detailsForm.value
  }
   this.commerceService.update(detailsForm);
   this.processGoogleMap();
 }

 processGoogleMap() {
   this.googleMap = (this.commerceService.commerce.details.adresse + " " + this.commerceService.commerce.details.postal).split(" ").join('%20')
   this.googleMapURL = "https://maps.google.com/maps?q="+ this.googleMap + "&t=&z=13&ie=UTF8&iwloc=&output=embed"
 }


}
