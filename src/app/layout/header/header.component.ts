import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommerceService } from '../../services/commerce.service'

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
 
  headerForm: FormGroup

  constructor(private formBuilder: FormBuilder, public commerceService: CommerceService) { 
    this.initializeForm()
  }

  ngOnInit() {
  }

  initializeForm() {
    this.headerForm = this.formBuilder.group({
      name: [this.commerceService.commerce.name, Validators.required],
      short_description: [this.commerceService.commerce.short_description],
    });
  }

  cancel() {
     this.initializeForm() // Re initialize form due to potential modification in the form
  }


  saveModification() {
    this.commerceService.update(this.headerForm.value);
  }

}
