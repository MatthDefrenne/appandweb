import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../../services/commerce.service'

@Component({
  selector: 'layout-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {

  constructor(public commerceService : CommerceService) { }

  ngOnInit() {
  }

}
