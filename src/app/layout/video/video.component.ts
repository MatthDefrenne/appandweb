import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../../services/commerce.service'
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'layout-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {

  isBeingEdited = false;

  url_video: any;

  constructor(public commerceService: CommerceService, public domSanitizer: DomSanitizer) {
    this.initialize()
  }

  ngOnInit() {
  }

  initialize() {
    this.url_video = this.commerceService.commerce.url_video;
  }

  cancel() {
    this.isBeingEdited = false;
    this.initialize();
  }

  saveModification() {
    this.isBeingEdited = false;
    this.commerceService.commerce.url_video =  this.url_video;
  }

}
