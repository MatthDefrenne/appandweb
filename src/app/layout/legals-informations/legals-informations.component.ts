import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../../services/commerce.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'layout-legals-informations',
  templateUrl: './legals-informations.component.html',
  styleUrls: ['./legals-informations.component.sass']
})
export class LegalsInformationsComponent implements OnInit {

  legalsInformationForm: FormGroup
  constructor(public commerceService: CommerceService, public formBuilder: FormBuilder) { 
      this.initializeForm();
  }


   initializeForm() {
    this.legalsInformationForm = this.formBuilder.group({
      entity: [this.commerceService.commerce.legalsInformations.entity, Validators.required], 
      tva_number: [this.commerceService.commerce.legalsInformations.tva_number, Validators.required],
      responsable: [this.commerceService.commerce.legalsInformations.responsable, Validators.required],
      telephone: [this.commerceService.commerce.legalsInformations.telephone, Validators.required],
      email: [this.commerceService.commerce.legalsInformations.email, Validators.required]
    });
  }


  ngOnInit() {
  }

  cancel() {
    this.initializeForm();
  }

  saveModification() {
    let modification = {
      legalsInformations: this.legalsInformationForm.value
    }

    this.commerceService.update(modification);
  }

}
