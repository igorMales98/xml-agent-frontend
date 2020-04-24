import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NotifierModule, NotifierOptions} from 'angular-notifier';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CreateAdvertisementComponent } from './create-advertisement/create-advertisement.component';
import {CreateAdvertisementService} from './create-advertisement/create-advertisement.service';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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
    CreateAdvertisementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NotifierModule.withConfig(customNotifierOptions),
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
