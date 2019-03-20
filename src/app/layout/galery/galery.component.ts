import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../../services/commerce.service'

@Component({
  selector: 'layout-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.sass']
})
export class GaleryComponent implements OnInit {


  constructor(public commerceService: CommerceService) { }

  ngOnInit() {
  }


  removeImage(index) {
    console.log(index);
    var action;
    if (confirm("Etes vous sur de vouloir supprimer cette photo?") == true) {
      this.commerceService.commerce.galery.splice(index, 1);
    }
  }

  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
       let imgSrc = event.target.result;
       this.commerceService.commerce.galery.push(imgSrc);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  

}
