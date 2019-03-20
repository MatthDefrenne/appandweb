import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { DescriptionComponent } from './layout/description/description.component';
import { GaleryComponent } from './layout/galery/galery.component';
import { CommerceService } from './services/commerce.service';
import { DetailsComponent } from './layout/details/details.component';
import { ScheduleComponent } from './layout/schedule/schedule.component';
import { VideoComponent } from './layout/video/video.component';
import { ButtonCallToActionComponent } from './layout/button-call-to-action/button-call-to-action.component';
import { HolidayComponent } from './layout/holiday/holiday.component';
import { SafePipe } from './pipes/safe.pipe';
import { LegalsInformationsComponent } from './layout/legals-informations/legals-informations.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DescriptionComponent,
    GaleryComponent,
    DetailsComponent,
    ScheduleComponent,
    VideoComponent,
    ButtonCallToActionComponent,
    HolidayComponent,
    SafePipe,
    LegalsInformationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CommerceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
