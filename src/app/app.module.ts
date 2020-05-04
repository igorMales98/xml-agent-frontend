import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NotifierModule, NotifierOptions} from 'angular-notifier';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CreateAdvertisementComponent} from './create-advertisement/create-advertisement.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RatingComponent } from './rating/rating.component';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { MessagesComponent } from './messages/messages.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {DatePipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HomePageComponent } from './home-page/home-page.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { RentACarComponent } from './rent-a-car/rent-a-car.component';

/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 90,
      gap: 30
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 3000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    CreateAdvertisementComponent,
    RatingComponent,
    HomePageComponent,
    PricelistComponent
    MessagesComponent,
    HomePageComponent,
    RentACarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NotifierModule.withConfig(customNotifierOptions),
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    TextareaAutosizeModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
