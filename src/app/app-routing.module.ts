import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateAdvertisementComponent} from './create-advertisement/create-advertisement.component';
import { MessagesComponent } from './messages/messages.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RentACarComponent} from './rent-a-car/rent-a-car.component';


const routes: Routes = [
  {path: 'createAdvertisement', component: CreateAdvertisementComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'rentACar', component: RentACarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
