import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../../services/commerce.service'

@Component({
  selector: 'button-call-to-action',
  templateUrl: './button-call-to-action.component.html',
  styleUrls: ['./button-call-to-action.component.sass']
})
export class ButtonCallToActionComponent implements OnInit {


  CTA = ""
  ctaBeingEdited = false;

  constructor(public commerceService: CommerceService) { 
    this.CTA = this.commerceService.commerce.button_cta 
  }

  ngOnInit() {

  }

  cancel() {
    this.CTA = this.commerceService.commerce.button_cta
    this.ctaBeingEdited = false; 
  }

  saveCTAButton() {
    let modification = {
      button_cta: this.CTA
    }
    this.commerceService.update(modification)
    this.ctaBeingEdited = false; 
  }

}
