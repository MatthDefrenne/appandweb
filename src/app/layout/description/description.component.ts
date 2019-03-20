import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../../services/commerce.service'

@Component({
  selector: 'layout-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass']
})
export class DescriptionComponent implements OnInit {

  isBeingEdited = false;

  description: string;
  constructor(public commerceService: CommerceService) {
    this.initializeReference()
  }

  ngOnInit() {
  }

  initializeReference() {
    this.description = this.commerceService.commerce.description;
  }

  cancel() {
    this.isBeingEdited = false;
    this.initializeReference();
  }

  saveModification() {
    let modification = {
      description: this.description
    }
    this.commerceService.update(modification)
    this.isBeingEdited = false;
  }

}
