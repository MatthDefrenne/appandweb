import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../../services/commerce.service'
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'layout-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.sass']
})
export class HolidayComponent implements OnInit {

  holidayForm: FormGroup;
  start = new Date();
  end = new Date();
  constructor(public commerceService: CommerceService, public formBuilder: FormBuilder) {
    this.initializeForm();
   }

  ngOnInit() {
  }

  initializeForm() {
    this.holidayForm = this.formBuilder.group({
      start:  [this.commerceService.commerce.holiday.start],
      end:  [this.commerceService.commerce.holiday.end],
      comment:  [this.commerceService.commerce.holiday.comment, Validators.maxLength(50)],
    });
  }

  cancel() {
    this.initializeForm() // Re initialize form due to potential modification in the form
   }


 saveModification() {
   let modification = {
     holiday: this.holidayForm.value
   }
   this.commerceService.update(modification);
 }


}
